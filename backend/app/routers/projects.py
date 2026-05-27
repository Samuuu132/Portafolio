from fastapi import APIRouter, HTTPException
from app.data import proyectos
from app.models.project import Project

router = APIRouter(prefix="/api/projects", tags=["Proyectos"])

@router.get("/", response_model=list[Project])
def get_projects():
    return proyectos

@router.get("/{project_id}", response_model=Project)
def get_project(project_id: int):
    proyecto = next((p for p in proyectos if p["id"] == project_id), None)
    if not proyecto:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    return proyecto