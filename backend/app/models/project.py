from pydantic import BaseModel
from typing import Optional, List

class Project(BaseModel):
    id: int
    titulo: str
    descripcion: str
    tecnologias: List[str]
    imagen_url: Optional[str] = None
    repo_url: Optional[str] = None
    demo_url: Optional[str] = None
    destacado: bool = False