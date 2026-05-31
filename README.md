# Portfolio — Diego Samuel Gudiel Palencia

Portafolio personal desarrollado como proyecto final del curso de Sistemas y Tecnologías Web en la Universidad del Valle de Guatemala. Diseñado también como pieza central de aplicación a posiciones de desarrollo web full-stack junior.

![Stack](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square)
![Stack](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square)
![Stack](https://img.shields.io/badge/Container-Docker-2496ED?style=flat-square)
![Stack](https://img.shields.io/badge/VCS-Git-F05032?style=flat-square)

---

## Stack Tecnológico

| Capa | Tecnología | Por qué la elegí |
|------|-----------|------------------|
| Backend | FastAPI (Python) | Alto rendimiento, validación automática con Pydantic, documentación interactiva con Swagger UI sin configuración adicional |
| Frontend | React + Vite | Ecosistema maduro, Component-based architecture ideal para UIs dinámicas, Vite ofrece HMR instantáneo en desarrollo |
| Estilos | CSS Modules | Control total sobre los estilos sin overhead de librerías externas, evita colisiones de clases |
| Estado global | Context API + useReducer | Solución nativa de React, suficiente para la escala del proyecto sin añadir dependencias como Redux |
| HTTP Client | Axios | Interceptores, manejo de errores centralizado y mejor DX que fetch nativo |
| Infraestructura | Docker + Docker Compose | Garantiza que el proyecto corre igual en cualquier máquina, elimina el "en mi máquina funciona" |
| Control de versiones | Git + GitHub | Commits descriptivos y ramas por feature para mantener historial limpio |

---

## Estructura del Proyecto
portfolio/
├── backend/                  # API REST con FastAPI
│   ├── app/
│   │   ├── models/           # Modelos Pydantic
│   │   │   ├── project.py
│   │   │   └── profile.py
│   │   ├── routers/          # Endpoints organizados por recurso
│   │   │   ├── projects.py
│   │   │   └── profile.py
│   │   ├── data.py           # Datos en memoria
│   │   └── main.py           # Entry point + CORS
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/                 # SPA con React
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       # Navbar, Footer
│   │   │   └── ui/           # Hero, About, Projects, Contact
│   │   ├── context/          # PortfolioContext (estado global)
│   │   ├── services/         # Capa de comunicación con la API
│   │   └── App.jsx
│   ├── Dockerfile
│   └── vite.config.js
├── docker-compose.yml
└── README.md

---

## Levantar el Proyecto

### Opción 1 — Con Docker (recomendado)

> Requisitos: Docker y Docker Compose instalados.

```bash
# Clonar el repositorio
git clone https://github.com/Samuuu132/Portafolio.git
cd Portafolio

# Levantar todos los servicios
docker-compose up --build
```

| Servicio | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8000 |
| Documentación API | http://localhost:8000/docs |

### Opción 2 — Sin Docker

**Backend:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/profile` | Información del perfil |
| GET | `/api/projects` | Lista de proyectos |
| GET | `/api/projects/{id}` | Detalle de un proyecto |

La documentación interactiva completa está disponible en `/docs` (Swagger UI) y `/redoc`.

---

## Decisiones Técnicas

**¿Por qué Context API y no Redux?**
El estado de la aplicación es simple: perfil + lista de proyectos. Añadir Redux sería over-engineering para esta escala. Context API con useReducer es suficiente, más legible y sin dependencias adicionales.

**¿Por qué datos en memoria y no base de datos?**
La arquitectura está diseñada para escalar. Los routers y modelos están completamente desacoplados de la fuente de datos — conectar una base de datos SQL solo requiere modificar `data.py` sin tocar los endpoints. Esta decisión permite enfocarse en la calidad del código y la arquitectura REST.

**¿Por qué Vite y no Create React App?**
CRA está deprecado. Vite ofrece HMR instantáneo, builds más rápidos y configuración más limpia. Es el estándar actual de la industria para proyectos React.

---

## Proyectos Incluidos

| Proyecto | Tecnologías | Descripción |
|---------|------------|-------------|
| API REST con JSON | Python, REST API | Ejercicio de consumo y construcción de APIs REST |
| Job Simulator | JavaScript, HTML, CSS | Simulador de trabajo con lógica de programación |
| Ejercicio React | React, JSX | Dominio de componentes, props y estado |
| Snake | JavaScript, HTML, CSS | Juego clásico con manejo del DOM |
| Calculadora | JavaScript, HTML, CSS | Interfaz funcional con lógica en el frontend |
| Backend API | Python, FastAPI, SQL | Arquitectura REST con rutas y modelos |
| E-Commerce | React, JavaScript, SQL | Tienda en línea con carrito y catálogo |

---

## Contacto

**Diego Samuel Gudiel Palencia**
Estudiante de Ingeniería en Sistemas — Universidad del Valle de Guatemala

- Email: gud24451@uvg.edu.gt
- GitHub: [Samuuu132](https://github.com/Samuuu132)
