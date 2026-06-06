import json
import os
import sys
from datetime import datetime
from sqlalchemy.orm import Session

# Add the parent directory to sys.path so we can import app modules
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.database import SessionLocal, engine, Base
from app.models import Ticket
from app.agent import local_mock_classification

def seed_database():
    print("Initializing SQLite tables...")
    Base.metadata.create_all(bind=engine)
    
    db: Session = SessionLocal()
    
    # Check if database is already seeded
    if db.query(Ticket).count() > 0:
        print("Database already contains data. Skipping seeding.")
        db.close()
        return
        
    print("Loading sample tickets...")
    json_path = os.path.join(os.path.dirname(__file__), "sample_tickets_100.json")
    if not os.path.exists(json_path):
        # Fallback to absolute workspace path
        json_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "data", "sample_tickets_100.json")
        
    if not os.path.exists(json_path):
        print(f"Error: Sample tickets file not found at {json_path}")
        db.close()
        return
        
    with open(json_path, "r") as f:
        tickets_data = json.load(f)
        
    print(f"Seeding {len(tickets_data)} tickets into SQLite database...")
    
    for i, t in enumerate(tickets_data):
        # Run classification rules locally to generate reasoning/confidence
        classification = local_mock_classification(t["title"], t["description"])
        
        # Override with any pre-defined category/priority from JSON if desired
        category = t.get("category", classification["category"])
        priority = t.get("priority", classification["priority"])
        
        # Add slight variations to timestamps to make the trends chart look beautiful
        # We will stagger dates over the last 7 days
        day_offset = (100 - i) // 15 # distributes them nicely
        hour_offset = i % 24
        minute_offset = (i * 7) % 60
        
        # Calculate mock dates
        import datetime as dt
        created_date = dt.datetime.now() - dt.timedelta(days=day_offset, hours=hour_offset, minutes=minute_offset)
        
        db_ticket = Ticket(
            ticket_id=t["ticket_id"],
            title=t["title"],
            description=t["description"],
            category=category,
            priority=priority,
            reasoning=classification["reasoning"],
            confidence=classification["confidence"],
            processing_time=round(0.4 + (i % 5) * 0.1, 2),
            user_type="demo",
            created_at=created_date
        )
        db.add(db_ticket)
        
    db.commit()
    print("Database seeding completed successfully.")
    db.close()

if __name__ == "__main__":
    seed_database()
