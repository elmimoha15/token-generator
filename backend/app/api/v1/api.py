from fastapi import APIRouter
from app.api.v1.routes import token

api_router = APIRouter()
api_router.include_router(token.router, prefix="/token", tags=["Token Generator"])
