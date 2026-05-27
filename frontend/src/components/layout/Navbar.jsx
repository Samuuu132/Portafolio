import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mi', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '0 2rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
            transition: 'all 0.3s ease',
        }}>
            <span style={{
                fontSize: '1.25rem',
                color: 'var(--color-accent)',
                fontWeight: 600,
            }}>
                Portfolio
            </span>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} style={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: 'var(--color-text-secondary)',
                        }}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}