from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from .base import Base

class Deck(Base):
    __tablename__ = "decks"
    
    id = Column(Integer, primary_key=True, index=True)

    native_language_id = Column(Integer, ForeignKey("languages.id", ondelete="RESTRICT"), nullable=False)
    foreign_language_id = Column(Integer, ForeignKey("languages.id", ondelete="RESTRICT"), nullable=False)


    name = Column(String(255), nullable=False, index=True)
    description = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    is_active = Column(Boolean, default=True)

    native_language = relationship("Language", foreign_keys=[native_language_id], back_populates="native_decks")
    foreign_language = relationship("Language", foreign_keys=[foreign_language_id], back_populates="foreign_decks")


class Language (Base):
    __tablename__ = "languages"

    id = Column(Integer, primary_key=True, index=True)
    language = Column(String(255), nullable=False, index=True) #Can be: English / German / Russian / Spanish
    native_decks = relationship("Deck", foreign_keys="Deck.native_language_id", back_populates="native_language")
    foreign_decks = relationship("Deck", foreign_keys="Deck.foreign_language_id", back_populates="foreign_language")

