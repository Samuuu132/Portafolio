import { useState, useEffect } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'
import './Hero.css'

const phrases = [
    'Desarrollador Web Full-Stack',
    'Apasionado por React y Python',
    'Construyo productos reales',
]

export default function Hero() {
    const { profile } = usePortfolio()
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [displayed, setDisplayed] = useState('')
    const [deleting, setDeleting] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setVisible(true), 100)
    }, [])

    useEffect(() => {
        const current = phrases[phraseIndex]
        let timeout
        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000)
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        } else if (deleting && displayed.length === 0) {
            setDeleting(false)
            setPhraseIndex((i) => (i + 1) % phrases.length)
        }
        return () => clearTimeout(timeout)
    }, [displayed, deleting, phraseIndex])

    return (
        <section id="hero" className={'hero' + (visible ? ' hero--visible' : '')}>
            <div className="hero__blob hero__blob--right" />
            <div className="hero__blob hero__blob--left" />
            <div className="hero__content">
                <span className="hero__badge">Disponible para trabajar</span>
                <h1 className="hero__name">
                    {profile ? profile.nombre : 'Tu Nombre'}
                </h1>
                <div className="hero__typewriter">
                    {displayed}
                    <span className="hero__cursor" />
                </div>
                <p className="hero__bio">
                    Ingeniero de Sistemas en formación enfocado en el desarrollo web moderno. Especializado en crear aplicaciones eficientes y centradas en el usuario, siempre impulsado por una pasión constante por la innovación tecnológica.
                </p>
                <div className="hero__actions">
                    <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
                    <a
                        href={profile ? profile.github_url : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--outline"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section >
    )
}