
# 🚀 AI Support Ticket Triage Agent Platform

👥 Team Information

Team Name 

    TrioNova

Team Number 

    Team 21

Team Members 

    Praveen G K

    Pranesh Kumar N

    Prasanna Kumar H

🌐 Deliverable Links

Deployed Links:

Demo Video
https://www.loom.com/share/2e92e65c6a8943a9b222c029ee411a7b

GitHub Repository
https://github.com/Praveen18-official/TriagAgent12

## 📌 Overview

The **AI Support Ticket Triage Agent Platform** is a web-based application that automates customer support ticket classification and prioritization using Artificial Intelligence.

The system analyzes incoming support tickets, understands their context, and automatically assigns:

* Ticket Category
* Priority Level
* Reasoning Explanation

The platform helps support teams reduce manual effort, improve response times, maintain consistency, and ensure critical issues receive immediate attention.

---

# 🧠 Problem Statement

Customer support teams often receive hundreds or thousands of tickets daily. Manual ticket triage creates several challenges:

* Time-consuming classification process
* Inconsistent prioritization
* Human errors in ticket assignment
* Delayed response to critical incidents
* Difficulty managing large ticket volumes

The AI Support Ticket Triage Agent Platform addresses these challenges by automatically classifying and prioritizing support tickets using AI-powered reasoning.

---

# 🎯 Features

## Core Features

### Ticket Management

* Support Ticket Submission
* Bulk Ticket Upload
* Ticket History Tracking
* Ticket Search & Filtering

### AI-Powered Classification

* Automatic Category Detection
* Intelligent Priority Assignment
* Context-Based Reasoning
* Confidence Score Generation

### Supported Categories

* Bug
* Feature Request
* Billing
* Other

### Supported Priority Levels

* P1 – Critical
* P2 – High
* P3 – Medium
* P4 – Low

### Dashboard & Analytics

* Real-Time Ticket Dashboard
* Ticket Distribution Charts
* Category Analytics
* Priority Analytics
* Processing Statistics

### AI Features

* Rule-Based Classification Engine
* Google Gemini Integration
* Structured Prompt Engineering
* Explainable AI Decisions

### User Experience

* Modern Responsive UI
* Dark / Light Theme Support
* Real-Time Updates using WebSockets
* Interactive Analytics Dashboard

---

# ⚙️ System Architecture

# ⚙️ Detailed System Architecture

## High-Level Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                        End Users                            │
│               (Support Agents / Admins)                    │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    React Frontend                           │
│                                                             │
│  • Dashboard                                                │
│  • Ticket Submission Form                                   │
│  • Ticket List & Search                                     │
│  • Analytics Dashboard                                      │
│  • Real-Time Updates                                        │
│  • AI Chat Assistant (Optional)                             │
│                                                             │
│ Technologies: React.js, Vite, Tailwind CSS, Axios           │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        │ HTTP / REST API
                        │ WebSocket Connection
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    FastAPI Backend                          │
│                                                             │
│  API Layer                                                  │
│  ├── GET /health                                            │
│  ├── GET /tickets                                           │
│  ├── POST /tickets                                          │
│  ├── POST /triage                                           │
│  ├── GET /analytics                                         │
│  └── WebSocket Endpoint                                     │
│                                                             │
│  Business Logic Layer                                       │
│  ├── Ticket Processing                                      │
│  ├── Category Assignment                                    │
│  ├── Priority Assignment                                    │
│  ├── Validation Engine                                      │
│  ├── Analytics Service                                      │
│  └── Notification Service                                   │
└───────────────┬───────────────────┬─────────────────────────┘
                │                   │
                │                   │
                ▼                   ▼

┌───────────────────────┐    ┌─────────────────────────────┐
│    SQLite Database    │    │      AI Classification      │
│                       │    │          Engine             │
│ • Tickets             │    │                             │
│ • Categories          │    │ • Gemini Integration        │
│ • Priorities          │    │ • LangChain Processing      │
│ • Reasoning Logs      │    │ • Prompt Engineering        │
│ • Analytics Data      │    │ • JSON Validation           │
│ • Audit Records       │    │ • Reasoning Generation      │
└───────────────────────┘    └──────────────┬──────────────┘
                                             │
                                             ▼

                           ┌─────────────────────────────┐
                           │      Google Gemini API      │
                           │                             │
                           │ • Ticket Understanding      │
                           │ • Classification            │
                           │ • Priority Determination    │
                           │ • Reasoning Generation      │
                           └─────────────────────────────┘
```

---

# 🔄 Ticket Processing Workflow

```text
Customer Support Ticket
            │
            ▼
┌─────────────────────────┐
│ Ticket Submission UI    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ FastAPI Endpoint        │
│ POST /triage            │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Input Validation        │
│ Pydantic Schemas        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Prompt Construction     │
│ & Context Preparation   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Google Gemini Model     │
│ Analysis                │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Category Detection      │
│ Bug / Feature / Billing │
│ / Other                 │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Priority Assignment     │
│ P1 / P2 / P3 / P4       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Reasoning Generation    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ JSON Validation         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Store in SQLite         │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Return Result to UI     │
└─────────────────────────┘
```

---

# 🧠 AI Classification Architecture

```text
                 Support Ticket
                        │
                        ▼

        ┌──────────────────────────────┐
        │ Prompt Engineering Layer     │
        └──────────────┬───────────────┘
                       │
                       ▼

        ┌──────────────────────────────┐
        │ Gemini Large Language Model  │
        └──────────────┬───────────────┘
                       │
         ┌─────────────┼─────────────┐
         │             │             │
         ▼             ▼             ▼

 ┌────────────┐ ┌────────────┐ ┌────────────┐
 │ Category   │ │ Priority   │ │ Reasoning  │
 │ Detection  │ │ Detection  │ │ Generation │
 └─────┬──────┘ └─────┬──────┘ └─────┬──────┘
       │              │              │
       └──────┬───────┴───────┬──────┘
              │               │
              ▼

      ┌────────────────────┐
      │ Structured JSON    │
      │ Response Builder   │
      └────────────────────┘
```

---

# 🗄️ Database Architecture

```text
tickets
│
├── id
├── title
├── description
├── category
├── priority
├── reasoning
├── created_at
└── status

analytics
│
├── id
├── total_tickets
├── bug_count
├── billing_count
├── feature_count
├── other_count
└── generated_at

audit_logs
│
├── id
├── ticket_id
├── action
├── timestamp
└── user
```

---

# 🔥 Key Architectural Features

### Frontend Layer

* Modern React Dashboard
* Responsive Design
* Real-Time Updates
* Analytics Visualization

### Backend Layer

* FastAPI REST APIs
* WebSocket Communication
* Validation & Error Handling
* Business Logic Processing

### AI Layer

* Google Gemini Integration
* Prompt Engineering
* Structured JSON Output
* Explainable Reasoning

### Database Layer

* SQLite Persistence
* Ticket Storage
* Audit Logging
* Analytics Tracking

### Quality Layer

* Pytest Testing
* API Validation
* Response Verification
* Error Monitoring

```
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* Axios
* React Router

## Backend

* Python
* FastAPI
* WebSockets
* Pydantic
* SQLAlchemy

## Database

* SQLite

## AI Integration

* Google Gemini API
* LangChain
* Rule-Based Classification Engine

## Testing

* Pytest

---

# 📂 Project Structure

```
/ (Workspace Root)
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py            # FastAPI main controllers & endpoints
│   │   ├── config.py          # Environment settings loader
│   │   ├── database.py        # SQLAlchemy connections
│   │   ├── models.py          # SQLite database schema models
│   │   ├── schemas.py         # Pydantic request-response schemas
│   │   ├── agent.py           # LangChain structured Gemini & Mock Agents
│   │   └── seed.py            # Database seeding script (100 sample tickets)
│   ├── requirements.txt       # Python dependencies configuration
│   ├── test_main.py           # Endpoint integration unit tests
│   └── tickets.db             # Active SQLite database file
├── frontend/
│   ├── src/
│   │   ├── components/        # Sidebar, Navbar, AI Chat Assistant
│   │   ├── context/           # Dark/Light Mode Theme Provider
│   │   ├── pages/             # 10 dashboard screens
│   │   ├── App.jsx            # Routing and layouts setup
│   │   ├── main.jsx           # Mounting entrypoint
│   │   └── index.css          # Tailwind directives, animations & Google fonts
│   ├── package.json           # Frontend NPM dependencies
│   ├── tailwind.config.js     # Tailwind grid layouts & themes
│   └── vite.config.js         # Vite bundler configurations
├── data/
│   └── sample_tickets_100.json# Generated sample support ticket dataset
├── README.md                  # System overview documentation
└── INSTALLATION.md            # Port setup and deployment guide

---

# 🚀 Setup Instructions

## Backend Setup

Install dependencies:

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
# Windows:
# .venv\Scripts\activate

pip install -r requirements.txt
```

Configure Gemini API Key (Optional):

```env
GOOGLE_API_KEY=your_google_gemini_api_key
```

Run Backend:

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

Install dependencies:

```bash
cd frontend

npm install
```

Run Frontend:

```bash
npm run dev
```

Default Frontend URL:

```text
http://localhost:5173
```

---

# ▶️ Run Instructions

## Start Backend

```bash
cd backend

uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

## Start Frontend

```bash
cd frontend

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

| Endpoint   | Method    | Description              |
| ---------- | --------- | ------------------------ |
| /          | GET       | Home Route               |
| /health    | GET       | Health Check             |
| /tickets   | GET       | Fetch All Tickets        |
| /tickets   | POST      | Submit New Ticket        |
| /triage    | POST      | AI Ticket Classification |
| /analytics | GET       | Dashboard Statistics     |
| /ws        | WebSocket | Real-Time Updates        |

---

# 🧪 Example

## Input Ticket

```text
I am unable to complete payment for my subscription.
The transaction fails every time after entering card details.
```

## Generated Output

```json
{
  "category": "Billing",
  "priority": "P2",
  "reasoning": "Payment failure impacts customer transactions and requires immediate attention."
}
```

---

# 📊 Dashboard Features

The platform provides:

* Total Tickets Processed
* Category Distribution
* Priority Distribution
* AI Accuracy Metrics
* Ticket Trends
* Recent Activity Feed
* Real-Time Processing Updates

---

# 🧪 Testing & Quality Assurance

## Backend Testing

Testing Framework:

* Pytest

Run Tests:

```bash
pytest -v
```

---

## Covered Test Scenarios

### API Validation

* Route Accessibility
* Health Endpoint Testing
* Request Validation

### Ticket Processing

* Ticket Submission
* Ticket Retrieval
* Database Operations

### AI Classification

* Category Prediction
* Priority Assignment
* Response Structure Validation

### Analytics

* Dashboard Statistics
* Aggregated Reports

### Real-Time Features

* WebSocket Connectivity
* Live Updates

---

## Coverage Summary

| Component             | Status   |
| --------------------- | -------- |
| Health Endpoint       | ✅ Tested |
| API Routes            | ✅ Tested |
| Ticket Submission     | ✅ Tested |
| Ticket Classification | ✅ Tested |
| Database Operations   | ✅ Tested |
| Analytics             | ✅ Tested |
| WebSockets            | ✅ Tested |

---

# 📋 Assumptions

* Tickets are submitted in English.
* Gemini API key is configured correctly when AI mode is enabled.
* Internet connectivity is available for Gemini processing.
* SQLite database is accessible locally.
* Support teams review AI-generated results before final action.

---

# ⚠️ Limitations

* AI accuracy depends on ticket clarity.
* Domain-specific tickets may require manual review.
* SQLite is intended for local development only.
* No production authentication implemented.
* Requires internet access when Gemini mode is enabled.

---

# 🔮 Future Enhancements

* User Authentication & Role Management
* Jira Integration
* ServiceNow Integration
* Zendesk Integration
* Multi-Language Ticket Support
* SLA Prediction Engine
* Auto Ticket Assignment
* Sentiment Analysis
* Email Integration
* CI/CD Deployment Pipeline
* Docker & Kubernetes Support
* Advanced AI Analytics

---

# 👨‍💻 Project Engineering Team

### Praveen

**Full Stack Lead & AI Orchestration**

### Pranesh

**Frontend Development & UI/UX Engineering**

### Prasanna

**QA Engineering & Database Management**

---

# 🎯 Project Goal

To automate support ticket triage using Artificial Intelligence, enabling organizations to improve operational efficiency, accelerate response times, and deliver a better customer support experience.
