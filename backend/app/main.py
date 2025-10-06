from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import decks_router

app = FastAPI(
    title="Flashcards API",
    description="Backend for flashcards app with spaced repetition",
    version="0.1.0"
)

# Configurar CORS para conectar con React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Por actualizar, :5173
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datos para emular una BDD
flashcards_data = [
    {
        "id": 1,
        "front": "Hello",
        "back": "Hola",
        "deck_id": 1,
        "last_reviewed": None,
        "next_review": None,
        "interval": 1,
        "ease_factor": 250,
        "repetition": 0
    },
    {
        "id": 2,
        "front": "Goodbye", 
        "back": "Adiós",
        "deck_id": 1,
        "last_reviewed": None,
        "next_review": None,
        "interval": 1,
        "ease_factor": 250,
        "repetition": 0
    }
]

app.include_router(decks_router, prefix="/decks", tags=["decks"])




# Endpoint de prueba
@app.get("/")
async def root():
    return {"FastAPI Running!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}