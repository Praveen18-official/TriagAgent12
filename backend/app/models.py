from sqlalchemy import Column, Integer, String, Text, Float, DateTime
from datetime import datetime
from .database import Base

class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(String, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    category = Column(String, index=True) # Bug, Feature, Billing, Other
    priority = Column(String, index=True) # P1 Critical, P2 High, P3 Medium, P4 Low
    reasoning = Column(Text)
    confidence = Column(Float)
    processing_time = Column(Float, default=0.0)
    user_type = Column(String, default="new", index=True) # demo or new
    created_at = Column(DateTime, default=datetime.utcnow)

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String) # Hashed
    created_at = Column(DateTime, default=datetime.utcnow)
