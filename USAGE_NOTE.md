# AI Usage Note – AI Support Ticket Triage Agent Platform

**Project:** AI Support Ticket Triage Agent Platform (Infinite Computer Solutions POC)

---

# 1. What AI Helped With

The AI Support Ticket Triage Agent Platform leverages Generative AI to automate the classification and prioritization of customer support tickets.

Google Gemini (LLM) was used to:

### Ticket Classification

* Analyze customer support ticket descriptions.
* Identify the nature of the issue.
* Categorize tickets into:

  * Bug
  * Feature
  * Billing
  * Other

### Priority Assignment

* Determine ticket priority levels:

  * P1 (Critical)
  * P2 (High)
  * P3 (Medium)
  * P4 (Low)
* Evaluate business impact, user impact, urgency, and service disruption before assigning priorities.

### Reasoning Generation

* Generate human-readable explanations for classification decisions.
* Provide transparent reasoning behind category and priority assignments.

### Ticket Analysis

* Extract key details from support requests.
* Identify affected functionality.
* Detect customer impact indicators.
* Summarize ticket content.

### Analytics Support

* Assist in generating insights related to:

  * Ticket volume trends
  * Category distribution
  * Priority distribution
  * Operational metrics

### Development Assistance

Cursor IDE was used during development to:

* Generate React frontend components.
* Build FastAPI backend APIs.
* Assist with SQLite database operations.
* Debug frontend and backend issues.
* Generate unit and integration test cases using Pytest.

---

# 2. What AI Got Wrong (and Fixes)

During development several AI-related challenges were encountered.

## Incorrect Ticket Classification

### Issue

Sometimes tickets containing multiple issues were classified into incorrect categories.

### Example

A ticket mentioning both a payment problem and a product defect could be classified as Bug instead of Billing.

### Fix

* Added stricter classification instructions.
* Improved prompt engineering.
* Introduced category validation rules.
* Added fallback rule-based logic.

---

## Incorrect Priority Assignment

### Issue

AI occasionally assigned priority using superficial keywords rather than actual business impact.

### Fix

* Added impact-based reasoning instructions.
* Forced evaluation of:

  * User impact
  * Business impact
  * Service availability
  * Financial impact
  * Operational disruption

This significantly improved priority accuracy.

---

## Gemini API Rate Limits

### Issue

Gemini occasionally returned:

* 429 Rate Limit Errors
* Temporary service failures

### Fix

* Implemented retry mechanisms.
* Added exponential backoff.
* Added graceful fallback responses.

---

## Invalid JSON Responses

### Issue

AI occasionally generated malformed JSON.

### Fix

* Added strict JSON-only instructions.
* Implemented Pydantic schema validation.
* Added backend response sanitization.

---

## Hallucinated Reasoning

### Issue

AI occasionally generated explanations that were not supported by ticket content.

### Fix

* Improved prompts with stricter instructions.
* Reduced creativity settings.
* Added validation checks.
* Reviewed outputs during QA testing.

---

## Inconsistent Output Structure

### Issue

Response fields sometimes varied across requests.

### Fix

* Standardized response schemas.
* Added structured output examples.
* Enforced consistent JSON formatting.

---

# 3. Best Prompts Used

## Prompt 1 – Complete Ticket Triage Classification

You are an expert Support Ticket Triage Agent.

You are an expert Support Ticket Triage Agent.

Your job is to analyze customer support tickets and classify them into:

Categories:

* Bug
* Feature
* Billing
* Other

Priority Levels:

* P1 = Critical
* P2 = High
* P3 = Medium
* P4 = Low

IMPORTANT:

Do NOT assign priority using simple keyword matching.

Instead, analyze the ticket like an experienced support engineer.

Follow this reasoning process:

Step 1: Understand the issue being reported.

Step 2: Determine the type of issue:

* Is something broken?
* Is the user requesting a new capability?
* Is there a payment or subscription problem?
* Is it a general question or other issue?

Step 3: Evaluate impact:

* How many users are likely affected?
* Is the issue blocking normal work?
* Is there business disruption?
* Is there financial impact?
* Is there risk of data loss?
* Is the service unavailable?

Step 4: Evaluate urgency:

* Can the user continue working?
* Is immediate action required?
* Can the issue wait?

Priority Guidelines:

P1 (Critical):

* Service unavailable
* Users cannot access the system
* Multiple users affected
* Business operations stopped
* Significant financial impact
* Possible data loss
* Security concerns
* Major outage

P2 (High):

* Major functionality affected
* Work can continue with difficulty
* Important feature malfunctioning
* Significant user frustration
* Limited business impact

P3 (Medium):

* Non-critical bug
* Partial functionality issue
* General support request
* Workaround exists

P4 (Low):

* Feature request
* Enhancement request
* Cosmetic issue
* Nice-to-have improvement

Examples:

Ticket:
Payment deducted twice and order was not placed.

Output:
{
"category": "Billing",
"priority": "P1",
"reasoning": "Customer experienced financial impact due to duplicate charge and failed transaction."
}

Ticket:
Please add dark mode support.

Output:
{
"category": "Feature",
"priority": "P4",
"reasoning": "This is a feature enhancement request and does not impact existing functionality."
}

Ticket:
After today's update none of our employees can access the platform. Users see blank screens and customer operations have stopped.

Output:
{
"category": "Bug",
"priority": "P1",
"reasoning": "System access failure affecting multiple users and disrupting business operations."
}

Now analyze the following ticket.

Think carefully about:

1. Issue type
2. Business impact
3. User impact
4. Urgency

Return ONLY valid JSON.

Required format:

{
"category": "Bug | Feature | Billing | Other",
"priority": "P1 | P2 | P3 | P4",
"reasoning": "Short explanation"
}

Ticket:
{ticket}

Follow this reasoning process:

### Step 1: Understand the issue being reported.

### Step 2: Determine the type of issue:

* Is something broken?
* Is the user requesting a new capability?
* Is there a payment or subscription problem?
* Is it a general question or other issue?

### Step 3: Evaluate impact:

* How many users are likely affected?
* Is the issue blocking normal work?
* Is there business disruption?
* Is there financial impact?
* Is there risk of data loss?
* Is the service unavailable?

### Step 4: Evaluate urgency:

* Can the user continue working?
* Is immediate action required?
* Can the issue wait?

### Return ONLY valid JSON:

```json
{
  "category": "Bug | Feature | Billing | Other",
  "priority": "P1 | P2 | P3 | P4",
  "reasoning": "Short explanation"
}
```

Ticket:

```text
{ticket}
```

---

## Prompt 2 – Ticket Information Extraction

Extract the following information from the support ticket.

Return ONLY valid JSON.

```json
{
  "issue_type": "",
  "affected_module": "",
  "customer_impact": "",
  "urgency_indicators": [],
  "summary": ""
}
```

Ticket:

```text
{ticket}
```

---

## Prompt 3 – Priority Validation

Analyze the support ticket and determine whether the assigned priority is appropriate.

Evaluate:

* Business Impact
* User Impact
* Financial Impact
* Service Availability
* Urgency

Return only JSON.

```json
{
  "recommended_priority": "",
  "reasoning": ""
}
```

---

## Prompt 4 – Ticket Summary Generation

Summarize the support ticket in one concise sentence suitable for support dashboards.

Return only JSON.

```json
{
  "summary": ""
}
```

---

# 4. AI Governance and Human Review

Although AI automates ticket triage, human review remains important.

Support engineers should validate:

* Ticket category
* Assigned priority
* Generated reasoning
* Recommended actions

AI is intended to assist support teams rather than replace human decision-making.

Human oversight helps ensure:

* Accuracy
* Consistency
* Reduced false positives
* Improved customer satisfaction

---

# 5. Testing AI Outputs

The system was tested using a variety of ticket types:

### Bug Tickets

* Login failures
* Application crashes
* Data synchronization issues
* UI rendering problems

### Billing Tickets

* Duplicate payments
* Subscription failures
* Refund requests
* Invoice issues

### Feature Requests

* Dark mode
* Export functionality
* Dashboard enhancements
* Notification preferences

### Other Tickets

* General inquiries
* Documentation requests
* Usage guidance
* Account information questions

The generated outputs were reviewed to ensure:

* Correct classification
* Accurate priority assignment
* Valid JSON structure
* Meaningful reasoning

---

# 6. Limitations of AI Usage

The AI system has certain limitations:

* Classification quality depends on ticket clarity.
* Ambiguous tickets may require manual review.
* Domain-specific terminology may reduce accuracy.
* AI-generated reasoning may occasionally require validation.
* Priority recommendations are advisory and not final decisions.

---

# 7. Future AI Enhancements

Planned improvements include:

* Automatic Ticket Assignment
* Sentiment Analysis
* SLA Breach Prediction
* Root Cause Analysis
* Similar Ticket Detection
* Knowledge Base Recommendations
* Multi-Language Ticket Support
* Escalation Prediction
* AI-Powered Resolution Suggestions

These enhancements will further improve support efficiency and operational effectiveness.

---

# Conclusion

The AI Support Ticket Triage Agent Platform successfully demonstrates how Generative AI can automate ticket classification, prioritization, and analysis. By combining FastAPI, React, SQLite, and Google Gemini, the system reduces manual effort, improves consistency, and helps support teams respond more effectively to customer issues while maintaining human oversight for critical decisions.
