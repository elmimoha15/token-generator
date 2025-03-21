from pydantic import BaseModel

class TokenRequest(BaseModel):
    length: int = 16
    upper: bool = True
    lower: bool = True
    numbers: bool = True
    symbols: bool = False
