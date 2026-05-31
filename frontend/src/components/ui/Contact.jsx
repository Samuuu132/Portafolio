import { useEffect, useRef, useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'
import './Contact.css'

export default function Contact() {
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

    return (
        <section id="contacto" ref={ref} className={'contact' + (visible ? ' contact--visible' : '')}>
            <div className="contact__inner">
                <span className="contact__label">Contacto</span>
                <h2 className="contact__title">Hablemos</h2>
                <p className="contact__subtitle">
                    Estoy disponible para nuevas oportunidades. Si tienes un proyecto interesante o quieres conversar sobre desarrollo web, no dudes en escribirme.
                </p>

                <div className="contact__cards">
                    <a
                        href={`mailto:${profile?.email || 'tuemail@example.com'}`}
                        className="contact__card"
                    >
                        <span className="contact__card-icon">✉️</span>
                        <span className="contact__card-label">Email</span>
                        <span className="contact__card-value">
                            {profile?.email || 'tuemail@example.com'}
                        </span>
                    </a>

                    <a
                        href={profile?.github_url || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="contact__card"
                    >
                        <span className="contact__card-icon">💻</span>
                        <span className="contact__card-label">GitHub</span>
                        <span className="contact__card-value">Samuuu132</span>
                    </a>

                    <div className="contact__card">
                        <span className="contact__card-icon">📍</span>
                        <span className="contact__card-label">Ubicación</span>
                        <span className="contact__card-value">Guatemala</span>
                    </div>
                </div>

                <a
                    href={`mailto:${profile?.email || 'tuemail@example.com'}`}
                    className="contact__cta"
                >
                    Enviar mensaje
                </a>
            </div>
        </section>
    )
}