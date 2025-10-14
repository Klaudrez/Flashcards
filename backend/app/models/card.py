from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from .base import Base

class Card(Base):
    __tablename__ = "cards"

    id = Column(Integer, primary_key=True, index=True)

    deck_id = Column(Integer, ForeignKey("decks.id", ondelete="CASCADE"), nullable=False)
    state_id = Column(Integer, ForeignKey("states.id", ondelete="RESTRICT"), nullable=False)

    phrase_native = Column(String(255), nullable=False, index=True)
    phrase_foreign = Column(String(255), nullable=False, index=True)
    next_review_in_native = Column(DateTime(timezone=True))
    next_review_in_foreign = Column(DateTime(timezone=True))
    ease_factor = Column(Float, default=2.5)  # Range from 1.0 (Really hard) from 10.0 (Easy)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    is_active = Column(Boolean, default=True)

    deck = relationship("Deck", back_populates="cards")
    state = relationship("State", back_populates="cards")


class State(Base):
    __tablename__= "states"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, index=True) # Can be : Learning / Known / Learned
    cards = relationship("Card", back_populates="state")



from app.models.deck import Deck
Deck.cards = relationship("Card", back_populates="deck", cascade="all, delete-orphan")

