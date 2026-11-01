function Header () {
    return (
        <header className="header-section">
            <h1 className="header-title">Victor Rodrigues Lima Pintassilgo</h1>
            
            <div className="header-contact">
                <span>📍 Itaboraí - RJ</span>
                <span className="contact-divider">|</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <span className="contact-divider">|</span>
                <a href="https://github.com/Victor-stack22" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            
            <p className="header-bio">
                <strong>Atual:</strong> Motorista de Aplicativos | Em transição de carreira para tecnologia. 
                Foco em desenvolvimento de soluções web modernas.
            </p>
        </header>
    )
}

export default Header;