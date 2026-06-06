import json
import random
import os

categories_templates = {
    "Bug": [
        {
            "titles": [
                "Critical: Checkout fails on card payment",
                "App crashes on mobile dashboard load",
                "Blank screen on saving user profile details",
                "Form submission returns 500 server error",
                "API rate limiting triggering incorrectly on standard accounts",
                "Unable to reset password - token invalid email link",
                "SQL Injection vulnerability in search bar",
                "Images not uploading in chat window",
                "Session terminates every 5 minutes",
                "Broken CSS styling on dark mode toggle"
            ],
            "descriptions": [
                "I tried purchasing the subscription, but every time I click 'Pay Now', the screen freezes and returns a processing failure. My card was charged once but order is not placed.",
                "Whenever I open the app on my Android device and click on 'View Analytics', the entire app crashes back to the home screen.",
                "I am attempting to update my email address in the profile settings page, but clicking 'Save' results in a white screen of death and the data does not update.",
                "Submitting the onboarding form returns a 500 Internal Server Error. Please see if the server logs indicate why database write failed.",
                "Our integration is blocked because we receive '429 Too Many Requests' after only 5 requests/minute. The documentation says the limit is 100.",
                "The link sent via password reset email says 'Invalid Token' immediately upon clicking. I cannot log in.",
                "Our security scanner flagged the search input field because it does not sanitize single quotes, allowing potential database table manipulation.",
                "Attempting to attach a JPG image (size 1.2MB) to a support chat ticket results in an endless uploading spinner and fails to send.",
                "My login session keeps expiring every 5 minutes even when I am active in the dashboard. I have to log back in repeatedly.",
                "Switching to dark mode makes the table text invisible because the text remains dark grey against the dark background."
            ]
        }
    ],
    "Billing": [
        {
            "titles": [
                "Charged twice for the monthly plan",
                "Request for annual invoice PDF",
                "Need refund for accidental renewal",
                "Subscription showing as inactive after successful charge",
                "Failed to update credit card details",
                "Charge disputed by bank - account suspended",
                "Requesting corporate billing discount details",
                "Prorated pricing query for team upgrades",
                "Auto-renewal failed but credit card is active",
                "Unexpected extra charges on last invoice"
            ],
            "descriptions": [
                "I was charged $49.00 twice on June 5th for my monthly plan. Please refund the duplicate transaction.",
                "I need the PDF invoices for the last 3 billing cycles (March, April, May 2026) for our company tax filings. They are not visible in my dashboard.",
                "My account auto-renewed for another year today, but I intended to cancel. Can I please get a refund as I haven't used the service this month?",
                "My credit card statement shows a successful charge of $99 on June 1st, but when I log in, my plan still says 'Free Trial (Expired)'.",
                "I am trying to update our company card on file to a corporate Mastercard, but the payment gateway returns 'Invalid Merchant Configuration'.",
                "My account was suspended today due to a chargeback dispute. I believe this was an error from our finance department. Please help reactivate.",
                "We are looking to scale our team from 10 to 50 users. Is there a corporate discount available, and can we pay via purchase order/invoice instead of card?",
                "If I add 5 new seats to my billing plan mid-month, how will the prorated charge be computed on the next invoice?",
                "My subscription was cancelled because auto-renewal failed, but my card on file has plenty of funds and doesn't expire until 2029.",
                "My last invoice shows an extra charge of $15.00 for 'API Add-on' which I never subscribed to. Please audit this billing line item."
            ]
        }
    ],
    "Feature": [
        {
            "titles": [
                "Requesting dark mode support in dashboard",
                "Add CSV/XLSX export option for audit logs",
                "Need Google OAuth / SSO integration",
                "Request for Slack notification webhook integration",
                "Bulk ticket reassignment functionality",
                "Add custom tags/labels to customer contacts",
                "Provide API endpoint to fetch team statistics",
                "Add multi-factor authentication (MFA/2FA) support",
                "Requesting PDF generation tool for generated charts",
                "Ability to schedule automated reports emails"
            ],
            "descriptions": [
                "Working late at night is straining my eyes. It would be amazing to have a toggle to switch the entire application UI to a dark theme.",
                "We need the ability to export our monthly activity logs and ticket history into a CSV or Excel sheet for security audits.",
                "Our company enforces Google SSO for security. We request Google Workspace login integration so team members don't need separate passwords.",
                "We would love to receive real-time alerts in our engineering Slack channel when a new P1 critical bug is reported in the system.",
                "Currently we have to assign tickets one by one. It would save a lot of time if we could select 50 tickets and reassign them in bulk.",
                "We need to tag customers with labels like 'VIP', 'Enterprise', or 'Trial' to prioritize conversations in our queues.",
                "We want to build a custom internal dashboard. Can you expose a public REST API endpoint that returns historical response time metrics?",
                "To comply with security audits, our team must enable 2FA via authenticator apps (like Google Authenticator or Duo). Please implement this.",
                "It would be very helpful if we could export the analytics charts on the dashboard as high-quality PDFs for our monthly executive board slides.",
                "We would like to automatically email a weekly PDF summary of open tickets to our support managers every Monday morning."
            ]
        }
    ],
    "Other": [
        {
            "titles": [
                "How do I close my account?",
                "General query regarding platform uptime SLA",
                "Feedback on the new onboarding tutorial",
                "Spam: Earn $5000/day from home advertisement",
                "Where is your server hosting location?",
                "How to change the notification email address?",
                "Partnership proposal inquiry",
                "Thank you note to the support representative",
                "Inquiry about supported browsers",
                "Question about API rate limits for free tier"
            ],
            "descriptions": [
                "I am no longer running my website and would like to completely delete my account and purge all stored client information.",
                "Where can we find your Service Level Agreement (SLA) terms regarding service availability, uptime guarantees, and refund eligibility?",
                "The new onboarding flow is a bit confusing. The third tooltip covers the 'Next' button on smaller laptop screen resolutions.",
                "Make money fast! Click this link to claim your cash reward. Absolutely free registration, no credit card required.",
                "To comply with local data regulations (GDPR), we need to confirm whether our data is hosted in the US, EU, or AP region.",
                "I want the alerts to be sent to dev-alerts@ourcompany.com, but my primary account email is admin@ourcompany.com. How do I decouple them?",
                "I represent a software consultancy and would love to discuss a partnership to integrate your ticket system into our clients' CRMs.",
                "Just wanted to say that Sarah did a fantastic job resolving our billing issue yesterday. The response was fast and helpful!",
                "Do you officially support Safari 15? Some of our agents are seeing layout displacement when viewing the conversation details.",
                "I am looking at your public documentation but couldn't find the exact limit for the free tier API. What is the daily request cap?"
            ]
        }
    ]
}

def generate_sample_tickets():
    tickets = []
    
    # Generate structured, realistic templates
    categories = ["Bug", "Billing", "Feature", "Other"]
    priorities = ["P1 Critical", "P2 High", "P3 Medium", "P4 Low"]
    
    # Let's create a database of 100 tickets
    # To make it look extremely authentic, we will mix and match titles, descriptions,
    # generate random ticket IDs, and simulate custom customer contact info.
    for i in range(1, 101):
        category = random.choice(categories)
        templates = categories_templates[category][0]
        
        idx = (i - 1) % len(templates["titles"])
        title = templates["titles"][idx]
        desc = templates["descriptions"][idx]
        
        # Add some variation to avoid exact duplicates
        title_suffix = f" (Ref: #{1000 + i})"
        title_full = f"{title}{title_suffix}"
        
        # Decide priority based on category/content characteristics
        # E.g., SQL injections or double billing are P1; requests are P3/P4.
        if "Critical" in title or "SQL" in title or "twice" in title or "suspended" in title:
            priority = "P1 Critical"
        elif "crashes" in title or "refund" in title or "SSO" in title or "disputed" in title:
            priority = "P2 High"
        elif "Request" in title or "Unable" in title or "API" in title or "Prorated" in title:
            priority = "P3 Medium"
        else:
            priority = "P4 Low"
            
        ticket_id = f"TC-{random.randint(1000, 9999)}"
        
        ticket = {
            "ticket_id": ticket_id,
            "title": title_full,
            "description": desc + f" Contact customer at customer{i}@example.com.",
            "category": category,
            "priority": priority
        }
        tickets.append(ticket)
        
    os.makedirs("../../data", exist_ok=True)
    os.makedirs(".", exist_ok=True)
    
    with open("../../data/sample_tickets_100.json", "w") as f:
        json.dump(tickets, f, indent=2)
        
    with open("sample_tickets_100.json", "w") as f:
        json.dump(tickets, f, indent=2)
        
    print(f"Successfully generated 100 sample tickets in data/sample_tickets_100.json and backend/app/sample_tickets_100.json")

if __name__ == "__main__":
    generate_sample_tickets()
