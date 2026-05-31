import { useEffect, useRef, useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'
import './Projects.css'

const icons = ['💻', '🚀', '🎮', '🧮', '⚙️', '🛒', '🔧']

function ProjectCard({ project, index }) {
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
            className={'project-card' + (visible ? ' project-card--visible' : '')}
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <div className="project-card__top">
                <div className="project-card__icon">
                    {icons[index % icons.length]}
                </div>
                {project.destacado && (
                    <span className="project-card__badge">Destacado</span>
                )}
            </div>

            <h3 className="project-card__title">{project.titulo}</h3>
            <p className="project-card__desc">{project.descripcion}</p>

            <div className="project-card__tags">
                {project.tecnologias.map((tech) => (
                    <span key={tech} className="project-card__tag">{tech}</span>
                ))}
            </div>

            <div className="project-card__links">
                {project.repo_url ? (
                    <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                    >
                        Ver código →
                    </a>
                ) : (
                    <span className="project-card__link project-card__link--disabled">Sin repositorio</span>
                )}
                {project.demo_url && (
                    <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                    >
                        Demo en vivo →
                    </a>
                )}
            </div>
        </div>
    )
}

export default function Projects() {
    const { projects, loading, error } = usePortfolio()
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
        <section id="proyectos" className="projects">
            <div className="projects__inner">
                <div ref={ref} className={'projects__header' + (visible ? ' fade-in' : '')}>
                    <span className="projects__label">Proyectos</span>
                    <h2 className="projects__title">Mi trabajo</h2>
                    <p className="projects__subtitle">
                        Ejercicios y proyectos desarrollados a lo largo del curso de Sistemas y Tecnologías Web.
                    </p>
                </div>

                {loading && (
                    <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                        Cargando proyectos...
                    </p>
                )}

                {error && (
                    <p style={{ textAlign: 'center', color: '#ef4444' }}>
                        {error}
                    </p>
                )}

                {!loading && !error && (
                    <div className="projects__grid">
                        {projects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}