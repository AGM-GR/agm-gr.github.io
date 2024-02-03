import './Header.css'

export default function Header() {
  return (
    <>
    {/*======= Mobile nav toggle button =======*/}
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

    {/*======= Header =======*/}
    <header id="header">
      <div className="d-flex flex-column">

        <div className="profile">
          <img className="img-fluid rounded-circle" src="https://avatars.githubusercontent.com/agm-gr" alt="" />
          <p className="name text-light">Alejandro</p>
          <p className="name surname text-light">Guerrero Martínez</p>
          <div className="social-links mt-3 text-center">
            <a href="https://github.com/AGM-GR" className="github" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/alejandro-guerrero-martinez/" className="linkedin" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house"></i> <span>Inicio</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bi bi-person-badge"></i> <span>Sobre Mí</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bi bi-file-earmark"></i> <span>Currículum</span></a></li>
            <li><a href="#projects" className="nav-link scrollto"><i className="bi bi-columns-gap"></i> <span>Proyectos</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}
