import { useEffect, useRef, useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'
import './About.css'

export default function About() {
    const { profile } = usePortfolio()
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const skills = profile?.skills || ['Python', 'FastAPI', 'React', 'Docker', 'Git']

    return (
        <section id="sobre-mi" ref={ref} className={'about' + (visible ? ' about--visible' : '')}>
            <div className="about__inner">
                <div className="about__left">
                    <span className="about__label">Sobre mí</span>
                    <h2 className="about__title">
                        Diseño e implemento soluciones web
                    </h2>
                    <p className="about__bio">
                        Estudiante de Ingeniería en Sistemas en la Universidad del Valle, con sólidos conocimientos en programación y desarrollo. Soy una persona curiosa y de mente abierta, consciente de que en la tecnología el camino nunca termina y siempre hay algo nuevo y emocionante por aprender.
                    </p>
                    <div className="about__info">
                        <div className="about__info-item">
                            <span className="about__info-label">Nombre</span>
                            <span>{profile?.nombre || 'Tu Nombre'}</span>
                        </div>
                        <div className="about__info-item">
                            <span className="about__info-label">Email</span>
                            <span>{profile?.email || 'tuemail@example.com'}</span>
                        </div>
                        <div className="about__info-item">
                            <span className="about__info-label">GitHub</span>
                            <a href={profile?.github_url || '#'} target="_blank" rel="noreferrer"
                                style={{ color: 'var(--color-accent)' }}>
                                Ver perfil
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about__right">
                    <div className="about__card">
                        <div>
                            <p className="about__card-title">Tecnologías que uso</p>
                            <div className="about__skills">
                                {skills.map((skill) => (
                                    <span key={skill} className="about__skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="about__stats">
                            <div className="about__stat">
                                <div className="about__stat-number">10+</div>
                                <div className="about__stat-label">Proyectos</div>
                            </div>
                            <div className="about__stat">
                                <div className="about__stat-number">5</div>
                                <div className="about__stat-label">Semestres</div>
                            </div>
                            <div className="about__stat">
                                <div className="about__stat-number">100%</div>
                                <div className="about__stat-label">Dedicación</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}