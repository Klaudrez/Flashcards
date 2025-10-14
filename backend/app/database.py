import os

from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker

from .models.base import Base
from .models import deck, card 

from dotenv import load_dotenv

load_dotenv()


connection_url = URL.create(
    drivername="postgresql",
    username=os.getenv("POSTGRES_USER"),
    password=os.getenv("POSTGRES_PASSWORD"),
    host=os.getenv("POSTGRES_HOST", "localhost"),
    port=os.getenv("POSTGRES_PORT", 5432),
    database=os.getenv("POSTGRES_DB")
)

ENVIRONMENT = os.getenv("ENVIRONMENT", "development")


engine = create_engine(connection_url)

Session = sessionmaker(bind=engine)
session = Session()


Base.metadata.create_all(bind=engine)
