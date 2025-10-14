import os
import sys
from dotenv import load_dotenv

sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from app.database import Session
from app.models.deck import Language
from app.models.card import State

def init_base_data():
    load_dotenv() 
    
    db = Session()
    try:
        print("starting database...")
        
        existing_languages = db.query(Language).count()
        existing_states = db.query(State).count()
        
        if existing_languages > 0:
            print("There are already languages ​​in the BDD")
        else:
            languages = [
                Language(language="English"),
                Language(language="Spanish"), 
                Language(language="German"),
                Language(language="Russian")
            ]
            db.add_all(languages)
            print("Languages maked: English, Spanish, German, Russian")
        
        if existing_states > 0:
            print("There are already States ​​in the BDD")  
        else:
            states = [
                State(name="learning"),
                State(name="reviewing"), 
                State(name="learned")
            ]
            db.add_all(states)
            print("Created states: learning, reviewing, learned")
        
        db.commit()
        print("Base data initialized correctly")
        
    except Exception as e:
        db.rollback()
        print(f" Error initializing data: {e}")
        return False
    finally:
        db.close()
    
    return True

if __name__ == "__main__":
    success = init_base_data()
    exit(0 if success else 1)