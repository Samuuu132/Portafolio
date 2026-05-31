import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <span className="footer__logo">Portfolio</span>
                <p className="footer__copy">
                    © {new Date().getFullYear()} Diego Samuel Gudiel Palencia — Construido con React + FastAPI
                </p>
                <a
                    href="https://github.com/Samuuu132"
                    target="_blank"
                    rel="noreferrer"
                    className="footer__link"
                >
                    GitHub →
                </a>
            </div>
        </footer>
    )
}