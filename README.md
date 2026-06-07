
# 🚀 AI Support Ticket Triage Agent Platform

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

Ticket Submission
│
▼
AI Processing Engine
│
▼
Category Classification
│
▼
Priority Determination
│
▼
Reasoning Generation
│
▼
Database Storage
│
▼
Dashboard Visualization

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
