from fastapi import APIRouter
from app.data import perfil
from app.models.profile import Profile

router = APIRouter(prefix="/api/profile", tags=["Perfil"])

@router.get("/", response_model=Profile)
def get_profile():
    return perfil