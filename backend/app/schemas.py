from pydantic import BaseModel, Field
from datetime import datetime
from typing import List, Dict, Optional

class TicketBase(BaseModel):
    ticket_id: str
    title: str
    description: str

class TicketCreate(TicketBase):
    pass

class TicketUpdate(BaseModel):
    category: str
    priority: str

class TicketResponse(TicketBase):
    id: int
    category: str
    priority: str
    reasoning: str
    confidence: float
    processing_time: float
    created_at: datetime

    class Config:
        from_attributes = True

class CategoryStat(BaseModel):
    category: str
    count: int
    percentage: float

class PriorityStat(BaseModel):
    priority: str
    count: int
    percentage: float

class DashboardStats(BaseModel):
    total_tickets: int
    category_distribution: List[CategoryStat]
    priority_distribution: List[PriorityStat]
    average_confidence: float
    average_processing_time: float
    processed_today: int
    critical_tickets_count: int

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[Dict[str, str]]] = []

class ChatResponse(BaseModel):
    reply: str
    suggested_actions: Optional[List[str]] = None

class UserAuth(BaseModel):
    email: str
    password: str

