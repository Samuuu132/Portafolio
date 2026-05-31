import { useEffect, useRef, useState } from 'react'
import './Tech.css'

const technologies = [
    {
        icon: '⚛️',
        name: 'React',
        role: 'Frontend',
        desc: 'Elegí React por su arquitectura basada en componentes reutilizables y su ecosistema maduro. Me permite construir SPAs dinámicas con manejo de estado eficiente usando Context API y hooks.',
        projects: ['Ejercicio React', 'E-Commerce', 'Portafolio'],
    },
    {
        icon: '🐍',
        name: 'Python + FastAPI',
        role: 'Backend',
        desc: 'FastAPI ofrece alto rendimiento, validación automática con Pydantic y documentación Swagger sin configuración adicional. Es el framework moderno de Python para APIs REST.',
        projects: ['Backend API', 'Portafolio API', 'API REST con JSON'],
    },
    {
        icon: '🐳',
        name: 'Docker',
        role: 'Infraestructura',
        desc: 'Docker garantiza que el proyecto corre igual en cualquier entorno. Con Docker Compose levanto el backend y frontend juntos con un solo comando, eliminando problemas de configuración.',
        projects: ['Portafolio'],
    },
    {
        icon: '🌐',
        name: 'JavaScript',
        role: 'Lenguaje',
        desc: 'Base del desarrollo web moderno. Lo aplico tanto en el frontend con React como en lógica de negocio, manejo de eventos y consumo de APIs REST con Axios.',
        projects: ['Job Simulator', 'Snake', 'Calculadora', 'E-Commerce'],
    },
    {
        icon: '🎨',
        name: 'HTML + CSS',
        role: 'Frontend',
        desc: 'Fundamento de cualquier interfaz web. Me enfoco en HTML semántico, diseño responsivo y CSS organizado con variables y animaciones para lograr interfaces profesionales.',
        projects: ['Job Simulator', 'Snake', 'Calculadora', 'Portafolio'],
    },
    {
        icon: '🗄️',
        name: 'SQL',
        role: 'Base de Datos',
        desc: 'Diseño y consulta de bases de datos relacionales. Lo apliqué en proyectos con manejo de entidades, relaciones y operaciones CRUD integradas al backend.',
        projects: ['Backend API', 'E-Commerce'],
    },
    {
        icon: '🔧',
        name: 'Git + GitHub',
        role: 'Control de Versiones',
        desc: 'Flujo de trabajo profesional con commits descriptivos, ramas por feature y repositorios públicos documentados. Todo mi trabajo está versionado y accesible en GitHub.',
        projects: ['Todos los proyectos'],
    },
]

function TechCard({ tech, index }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={'tech__card' + (visible ? ' tech__card--visible' : '')}
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <div className="tech__card-header">
                <div className="tech__card-icon">{tech.icon}</div>
                <div>
                    <div className="tech__card-name">{tech.name}</div>
                    <div className="tech__card-role">{tech.role}</div>
                </div>
            </div>
            <p className="tech__card-desc">{tech.desc}</p>
            <div className="tech__card-projects-label">Usado en</div>
            <div className="tech__card-projects">
                {tech.projects.map((p) => (
                    <span key={p} className="tech__card-project">{p}</span>
                ))}
            </div>
        </div>
    )
}

export default function Tech() {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="tecnologias" className="tech">
            <div className="tech__inner">
                <div ref={ref} className={'tech__header' + (visible ? ' fade-in' : '')}>
                    <span className="tech__label">Stack tecnológico</span>
                    <h2 className="tech__title">Tecnologías que uso</h2>
                    <p className="tech__subtitle">
                        Herramientas y lenguajes con los que construyo proyectos reales, desde el frontend hasta el despliegue.
                    </p>
                </div>

                <div className="tech__grid">
                    {technologies.map((tech, i) => (
                        <TechCard key={tech.name} tech={tech} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}