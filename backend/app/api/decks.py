from fastapi import APIRouter

# Crear el router
router = APIRouter()

decks_data = [
    {
        "id": 1,
        "name": "Basic vocabulary",
        "description": "Essencial words for english language",
        "native_language": "Spanish",
        "learning_language": "English",
        "card_count": 32
    },
    {
        "id": 2,
        "name": "Verb Tenses",
        "description": "Diferentes tiempos verbales",
        "native_language": "English",
        "learning_language": "Spanish", 
        "card_count": 23
    },
    {
        "id": 3,
        "name": "everyday phrases",
        "description": "a bunch of common phrases in daily conversation",
        "native_language": "English",
        "learning_language": "Russian", 
        "card_count": 40
    },
    {
        "id": 4,
        "name": "Game: The Forest",
        "description": "useful phrases to play The Forest with foreing friends",
        "native_language": "English",
        "learning_language": "Russian", 
        "card_count": 30
    },
    {
        "id": 5,
        "name": "Places",
        "description": "Learn how to say phrases and ask for directions.",
        "native_language": "English",
        "learning_language": "Russian", 
        "card_count": 30
    },
    {
        "id": 6,
        "name": "Places",
        "description": "Learn how to say phrases and ask for directions.",
        "native_language": "English",
        "learning_language": "German", 
        "card_count": 30
    },

]

@router.get("/")
async def get_decks():
    return decks_data

@router.get("/{deck_id}")
async def get_deck(deck_id: int):
    for deck in decks_data:
        if deck["id"] == deck_id:
            return deck
    return {"error": "Deck not found"}

