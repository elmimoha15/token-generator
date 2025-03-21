from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    TOKEN_DEFAULT_LENGTH: int = int(os.getenv("TOKEN_DEFAULT_LENGTH", 16))

settings = Settings()
