from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import projects, profile

app = FastAPI(
    title="Portfolio API",
    description="API para mi portafolio personal",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(profile.router)

@app.get("/")
def root():
    return {"mensaje": "API del portafolio funcionando"}