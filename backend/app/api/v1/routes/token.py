
from fastapi import APIRouter
from app.services.generator import generate_token
from app.api.v1.schemas.token import TokenRequest

router = APIRouter()

@router.post("/generate")
def generate_token_route(payload: TokenRequest):
    token = generate_token(
        length=payload.length,
        use_upper=payload.upper,
        use_lower=payload.lower,
        use_numbers=payload.numbers,
        use_symbols=payload.symbols,
    )
    return {"token": token}

