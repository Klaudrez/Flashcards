from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Flashcards API",
    description="Backend for flashcards app with spaced repetition",
    version="0.1.0"
)

# Configurar CORS para conectar con React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Por actualizar, :5173
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

decks_data = [
    {
        "id": 1,
        "name": "Vocabulario Básico",
        "description": "Palabras esenciales en inglés",
        "native_language": "Español",
        "learning_language": "Inglés",
        "card_count": 2
    },
    {
        "id": 2,
        "name": "Verb Tenses",
        "description": "Diferentes tiempos verbales",
        "native_language": "English",
        "learning_language": "Spanish", 
        "card_count": 0
    }
]

# Endpoint de prueba
@app.get("/")
async def root():
    return decks_data

@app.get("/health")
async def health_check():
    return {"status": "healthy"}