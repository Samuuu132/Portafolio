from pydantic import BaseModel
from typing import List

class Profile(BaseModel):
    nombre: str
    titulo: str
    bio: str
    email: str
    github_url: str
    skills: List[str]