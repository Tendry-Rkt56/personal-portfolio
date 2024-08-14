export function NavBar () {
    return (
        <header className="header">
            <a href="#home" className="logo">Tendry <span>Rkt</span></a>

            <a className="github" href="https://github.com/Tendry-Rkt56"><i className='bx bxl-github'></i></a>

            <i className='bx bx-menu' id="menu-icon"></i>

            <nav className="navbar">
                <a className="links" href="#home">Accueil</a>
                <a className="links" href="#about">About</a>
                <a className="links" href="#services">Services</a>
                <a className="links" href="#competences">Compétences</a>
                <a className="links" href="#projets">Projets</a>
                <a className="links" href="mailto:tendryzephyrin@gmail.com">Mail</a>
            </nav>
        </header>
    )
}