# Test Cases

This document describes happy-path test cases for the project and includes examples for: 1) `pytest`, 2) `xUnit`-style Python tests, and 3) equivalent frontend test coverage using `vitest`-style tests.

## 1. Pytest Happy Path Tests

### Backend API
These tests validate the primary FastAPI endpoints and assume the backend service is running and seeded with example ticket data.

- `test_stats_endpoint`
  - Request: `GET /api/stats`
  - Expected: status `200`
  - Verify: response JSON contains `total_tickets`, `average_confidence`, `critical_tickets_count`

- `test_results_endpoint`
  - Request: `GET /api/results?page=1&limit=5`
  - Expected: status `200`
  - Verify: response JSON contains `tickets`, `total`; `len(tickets)` is `<= 5`

- `test_ticket_detail_endpoint`
  - Setup: use an existing ticket ID from seeded data
  - Request: `GET /api/ticket/{id}`
  - Expected: status `200`
  - Verify: `ticket_id`, `title`, `description` match the stored ticket

- `test_chat_endpoint`
  - Request: `POST /api/chat` with payload `{ "message": "How many bug tickets do we have?" }`
  - Expected: status `200`
  - Verify: response JSON contains `reply` and `suggested_actions`

- `test_settings_read_write`
  - Request: `GET /api/settings`
  - Expected: status `200`
  - Request: `POST /api/settings` with valid settings JSON
  - Expected: status `200`
  - Verify: updated settings are persisted on subsequent `GET`

### Example pytest structure

```python
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_stats_endpoint():
    response = client.get('/api/stats')
    assert response.status_code == 200
    data = response.json()
    assert 'total_tickets' in data
    assert 'average_confidence' in data

# ... other test functions ...
```

## 2. xUnit Happy Path Tests (Python `unittest`)

The existing backend test file `backend/test_main.py` already follows an xUnit-style structure using `unittest.TestCase`.

### Recommended happy-path test cases

- `TestTicketTriageAPI.test_get_stats`
  - Confirms `/api/stats` returns valid analytics data

- `TestTicketTriageAPI.test_get_results`
  - Confirms `/api/results` returns a ticket list and pagination metadata

- `TestTicketTriageAPI.test_get_ticket_details`
  - Fetches a real ticket from the database and verifies detail response

- `TestTicketTriageAPI.test_settings_endpoints`
  - Reads settings, writes settings, and confirms persistence

- `TestTicketTriageAPI.test_chat_assistant`
  - Sends a chat question and verifies the assistant reply structure

### Example xUnit test outline

```python
class TestTicketTriageAPI(unittest.TestCase):
    def setUp(self):
        self.db = SessionLocal()
    def tearDown(self):
        self.db.close()

    def test_get_stats(self):
        response = client.get('/api/stats')
        self.assertEqual(response.status_code, 200)
        self.assertIn('total_tickets', response.json())
```

## 3. Vitest / Frontend Happy Path Tests

For the frontend, happy-path tests target the main user flow of rendering the dashboard, navigating pages, and verifying core UI components.

### Suggested vitest-style happy path cases

- `renders landing page hero`
  - Verify the landing page renders the title and launch buttons

- `navigates to dashboard`
  - Simulate clicking the launch button or router navigation to `/dashboard`
  - Verify the dashboard page content is visible

- `shows team section on landing page`
  - Render `Landing.jsx`
  - Assert that team members `Praveen`, `Pranesh`, and `Prasanna` appear

- `loads analytics charts`
  - Render `Dashboard.jsx`
  - Verify chart and summary widgets are present

- `displays ticket list`
  - Mock the API response for `/api/results`
  - Assert that the ticket table renders expected rows

### Example vitest test outline

```js
import { render, screen } from '@testing-library/react'
import Landing from '../pages/Landing'

test('renders landing page hero', () => {
  render(<Landing />)
  expect(screen.getByText(/Automate Support Ticket Classifications/i)).toBeInTheDocument()
})
```

## 4. Happy Path Test Matrix

| Test Layer | Framework | Target | Expected Outcome |
| --- | --- | --- | --- |
| Backend API | pytest | `/api/stats` | JSON analytics payload, status 200 |
| Backend API | xUnit | `/api/results` | ticket list payload, status 200 |
| Backend API | xUnit | `/api/ticket/{id}` | detail payload for known ticket |
| Backend API | pytest | `/api/chat` | chat response contains `reply` |
| Frontend UI | vitest | `Landing.jsx` | page renders main hero and team names |
| Frontend UI | vitest | `Dashboard.jsx` | analytics widgets render correctly |

## 5. How to Run

- Run `pytest` from the repository root after installing backend dependencies.
- Run Python `unittest` with `python -m unittest backend.test_main`.
- Run frontend tests using `vitest` once the package is installed and configured.

## 6. Notes

- These cases cover the happy path only; they do not include error states or negative validation.
- Frontend vitest coverage should be added after the frontend test configuration is present.
