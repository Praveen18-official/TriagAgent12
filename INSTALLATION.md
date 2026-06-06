# Installation and Setup Guide

This guide details the step-by-step instructions to configure, seed, test, and run the **Ticket Triage Agent** platform locally on your computer.

---

## 1. System Requirements & Port Mapping
To ensure correct communication, the system uses the following ports:
- **Backend API Server**: `http://localhost:8000`
- **React Frontend Server**: `http://localhost:5173` (Vite Default)

---

## 2. Backend Setup (FastAPI + SQLite)

### Step 1: Open Terminal and Navigate to Backend Folder
```bash
cd backend
```

### Step 2: Create a Virtual Environment and Activate It
- **On Windows (PowerShell)**:
  ```powershell
  python -m venv venv
  .\venv\Scripts\Activate.ps1
  ```
- **On macOS / Linux**:
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```

### Step 3: Install Required Dependencies
```bash
pip install -r requirements.txt
```

### Step 4: Seed the SQLite Database
Run the database seed script to initialize the SQLite schema and populate it with 100 sample support tickets:
```bash
python app/seed.py
```
*(This will generate a SQLite database file named `tickets.db` inside the `backend` directory).*

### Step 5: Execute Integration Unit Tests
Verify all API routes, database hooks, and chatbot query processors are functional:
```bash
python -m unittest test_main.py
```
*(You should see a clean `OK` confirmation report showing all tests passed).*

### Step 6: Start the FastAPI Server
Launch the server with live reloading enabled:
```bash
uvicorn app.main:app --reload --port 8000
```
The backend API documentation is now accessible at `http://localhost:8000/docs`.

---

## 3. Frontend Setup (ReactJS)

### Step 1: Open a New Terminal window and Navigate to Frontend Folder
```bash
cd frontend
```

### Step 2: Install Node Packages
```bash
npm install
```

### Step 3: Start the Vite Development Server
```bash
npm run dev
```
The React SPA client is now running at `http://localhost:5173`. Open this URL in your web browser.

---

## 4. How to Run and Present the Demo

1. **Access Landing Screen**: Go to `http://localhost:5173/`. You are greeted by a beautiful modern SaaS landing page.
2. **Launch Application**: Click **Get Started** or **Sign In**.
3. **Log In**: Click **Continue as Demo User** to skip manual authentication or enter any mock credentials (e.g. `demo@example.com` / `password`).
4. **Dashboard View**: Check out the KPI cards. They show counts, percentages, averages, and a recent ticket activity table, fully seeded from `tickets.db`.
5. **Simulate a New Processing Batch**:
   - Go to **Upload Tickets** tab.
   - Click **Load Demo Dataset** (which parses 10 mock support issues).
   - Verify the entries inside the **File Preview Table**.
   - Click **Process Tickets**. This redirects you to the live **AI Processing Page**.
   - Click **Start AI Analysis** to spin up the WebSocket connection.
   - Watch the logs stream inside the terminal console in real-time (`Reading Ticket...`, `Analyzing Content...`, etc.) and watch the progress bar increment.
   - Once completed, click **View Triaged Results** to redirect to the database query screen.
6. **Interact with Results**:
   - Perform live text searches in the search input.
   - Filter rows by clicking `Category Filter` or `Priority Filter`.
   - Click the **Eye Icon** on any ticket to view a detailed page comparison, complete with confidence gauges, processing speed, AI reasoning logs, and formatted JSON code views.
   - Click the **Pencil Icon** to manually adjust classifications.
   - Click **Export CSV** to stream and download the database list into an Excel file.
7. **Query the Chatbot**:
   - Click the **Ask Assistant** action button in the bottom right corner.
   - Ask standard questions like: *"How many billing tickets do we have?"* or *"Show critical P1 tickets"*.
   - Click the quick action labels to verify responses.
8. **Test Dark Mode Toggling**:
   - Toggle the Sun/Moon icons in the upper navigation bar, or select layouts inside the **Settings** page. All 10 screens support the dark theme seamlessly.
9. **Configure Custom API Keys**:
   - Go to **Settings**.
   - Enter your own Google Gemini API key (`GEMINI_API_KEY`) and click **Save**. The backend will automatically transition from the rule-based local mock engine to full LangChain LLM structured classifications!
