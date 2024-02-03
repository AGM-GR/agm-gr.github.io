import { useState } from 'react'
import Header from './Components/Header.jsx'
import './App.css'

import HatventureHero from '/assets/projects/hatventure_herocapsule.jpg'

function App() {
  return (
    <>
      <Header />
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container">
          <h1>Alejandro <br/> Guerrero Martínez</h1>
          <p><span>Videogame Developer</span></p>
        </div>
      </section>{/* End Hero */}

      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>Sobre mí</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img className="img-fluid" src="https://avatars.githubusercontent.com/agm-gr" alt=""/>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Programmer - Senior Unity Developer</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Fecha de nacimiento:</strong> <span>26 June 1995</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Valencia, Valencia, Spain</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Puesto actual:</strong> <span>Desarrollador en <a href="https://www.bravezebra.com/" target="_blank" rel="noopener noreferrer">BraveZebra</a></span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Edad:</strong> <span>28</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Estudios:</strong> <span>Master en Ingeniería Informática</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Idiomas:</strong> <span>Español / Inglés</span></li>
                    </ul>
                  </div>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>
            </div>

          </div>
        </section>{/* End About Section */}

        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Conocimientos</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row skills-content">

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Unity 3D</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">C#</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">C++</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Git</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Java Script</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">PHP/HTML/CSS</span>
                </div>
              </div>

            </div>

            <h3 className="mt-4 mb-4">Conocimientos básicos:</h3>

            <div className="row skills-content">

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Unreal Engine</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Modelado (Blender/3ds max)</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Edición de imágenes (Gimp)</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Android Nativo</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Arduino</span>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="progress">
                  <span className="skill">Gestión servidores</span>
                </div>
              </div>

            </div>

          </div>
        </section>{/* End Skills Section */}

        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title">
              <h2>Currículum</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Educación</h3>
                <div className="resume-item">
                  <h4>Master en Ingeniería Informática</h4>
                  <h5>2017 - 2018</h5>
                  <p><em>Universidad de Granada</em></p>
                  <p>Master profesionalizante de la Ingeniería Informática, en el que se adquieren conocimientos de distintas ramas de la informática (Análisis de datos, Big Data, Sistemas en red, Creación y aprovisionamiento de servicios ...) así como diseño del software y metodologías de trabajo.</p>
                </div>
                <div className="resume-item">
                  <h4>Grado en Ingeniería Informática</h4>
                  <h5>2013 - 2017</h5>
                  <p><em>Universidad de Granada</em></p>
                  <p>Durante mis estudios de grado decidí enfocar mis optativas al desarrollo de videojuegos y aprendí de forma autodidáctica sobre Unity 3D.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Programador de Videojuegos</h4>
                  <h5>2022 - actualidad</h5>
                  <p><a href="https://www.bravezebra.com/" target="_blank" rel="noopener noreferrer"><em>Brave Zebra</em></a> - Valencia</p>
                  <ul>
                    <li>Porting de videojuegos a Nintendo Switch, Xbox One, Xbox Series, PlayStation 4 y PlayStation 5.</li>
                    <li>Desarrollo de prototipos y vertical slices del propio estudio.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Programador de Videojuegos</h4>
                  <h5>2019 - 2023</h5>
                  <p><a href="https://gonemadstudios.github.io/" target="_blank" rel="noopener noreferrer"><em>Gone Mad Studios</em></a> - Valencia</p>
                  <p>Socio fundador de la empresa Gone Mad Studios, como cooperativa de trabajo asociado.
                    <br/>
                    Gone Mad ofrecía trabajos de outsourcing y desarrollo a medida a la par que desarrollabamos videojuegos propios.</p>
                  <ul>
                    <li>Desarrollo a medida de videjuegos para proyectos de gamificación.</li>
                    <li>Desarrollo web PHP y node.</li>
                    <li>Servicio de Porting de videjuegos a Nintendo Switch.</li>
                    <li>Diseño y desarrollo de Hatventure y Hirilun.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Programador de aplicaciones Web</h4>
                  <h5>jun.2018 - sept.2018</h5>
                  <p><a href="https://dba-acustica.es/" target="_blank" rel="noopener noreferrer"><em>dBA Acústica</em></a> - Granada</p>
                  <p>Prácticas del Máster de Ingeniería Informática:</p>
                  <ul>
                    <li>Programador full stack, desarrollando soluciones con Node, AngularJS y MySQL para su sistema web.</li>
                    <li>Prototipo de aplicación web (React) y Android nativo para traquear datos de estaciones de sonido</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>{/* End Resume Section */}

        {/*<!-- ======= Services Section ======= -->*/}
        <section id="projects" className="projects section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Proyectos</h2>
            </div>

            <div className="row">

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon-hero me-3"><img className="img-fluid" loading="lazy" src={HatventureHero}/></div>
                <h4 className="title"><a href="https://play.google.com/store/apps/details?id=com.GoneMadStudios.Hatventure" target="_blank" rel="noopener noreferrer">Hatventure</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
                <p className="description">Desarrollo y diseño del videojuego Hatventure para móviles Android.<br/>Autopublicación en Google Play Store.</p>
              </div>

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon-hero me-3"><img className="img-fluid" loading="lazy" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1407300/hero_capsule.jpg"/></div>
                <h4 className="title"><a href="https://store.steampowered.com/app/1407300/Hirilun/" target="_blank" rel="noopener noreferrer">Hirilun</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
                <p className="description">Desarrollo y diseño del videojuego Hirilun.<br/>Programación de los shaders, efecto de outline y mejora de las sombras basado en el paper: Revectorization-Based Shadow Mapping.</p>
              </div>

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon-hero me-3"><img className="img-fluid" loading="lazy" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1592110/hero_capsule.jpg"/></div>
                <h4 className="title"><a href="https://store.steampowered.com/app/1592110/Spirit_of_the_Island/" target="_blank" rel="noopener noreferrer">Spirit of the Island</a></h4>
                <p className="related"><em>Brave Zebra</em></p>
                <p className="description">Lead programmer de Porting: Nintendo Switch, Xbox One y Series, PlayStation 4 y 5. <br/> Integración del control con Gamepad, optimización de rendimiento para consolas y plataformas móviles.</p>
              </div>

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon-hero me-3"><img className="img-fluid" loading="lazy" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1333470/hero_capsule.jpg"/></div>
                <h4 className="title"><a href="https://store.steampowered.com/app/1333470/Alex_Kidd_in_Miracle_World_DX/" target="_blank" rel="noopener noreferrer">Alex Kidd in Miracle World DX</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
                <p className="description">Pulido del juego y bug-fixing en la parte final del desarrollo y en el port a Nintendo Switch.</p>
              </div>


            </div>

            <h4 className="mt-4 mb-4">Porting a Nintendo Switch:</h4>

            <div className="row">

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Laraan_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Laraan-1805508.html" target="_blank" rel="noopener noreferrer">Laraan</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_LambsOnTheRoadTheBeginning_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Lambs-on-the-road-The-Beginning-1985764.html" target="_blank" rel="noopener noreferrer">Lambs on the road: The Beginning</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_GunpigFirepowerForHire_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/GUNPIG-Firepower-For-Hire-1880379.html" target="_blank" rel="noopener noreferrer">GUNPIG: Firepower For Hire</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_Kolumno_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Kolumno-1880197.html" target="_blank" rel="noopener noreferrer">Kolumno</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_WhatComesAfter_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/What-Comes-After-1929180.html" target="_blank" rel="noopener noreferrer">What Comes After</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_DexterStardustAdventuresInOuterSpace_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Dexter-Stardust-Adventures-in-Outer-Space-2101513.html" target="_blank" rel="noopener noreferrer">Dexter Stardust : Adventures in Outer Space</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_LoneMcLoneganAWesternAdventure_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Lone-McLonegan-A-Western-Adventure-2032270.html" target="_blank" rel="noopener noreferrer">Lone McLonegan : A Western Adventure</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_Galacticon_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Galacticon-2207059.html" target="_blank" rel="noopener noreferrer">Galacticon</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_AWindingPath_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/A-Winding-Path-2240845.html" target="_blank" rel="noopener noreferrer">A Winding Path</a></h4>
                <p className="related"><em>Gone Mad Studios</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_TheLegendOfGwen_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/The-Legend-of-Gwen-2319905.html" target="_blank" rel="noopener noreferrer">The Legend of Gwen</a></h4>
                <p className="related"><em>Brave Zebra</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_Papertris_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Papertris-2330669.html" target="_blank" rel="noopener noreferrer">Papertris</a></h4>
                <p className="related"><em>Brave Zebra</em></p>
              </div>

              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon-small me-3"><img className="img-fluid" loading="lazy" src="https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/1x1_NSwitchDS_SentryCity_image500w.jpg"/></div>
                <h4 className="title"><a href="https://www.nintendo.es/Juegos/Programas-descargables-Nintendo-Switch/Sentry-City-2397224.html" target="_blank" rel="noopener noreferrer">Sentry City</a></h4>
                <p className="related"><em>Brave Zebra</em></p>
              </div>


            </div>

            <h4 className="mt-4 mb-4">Game Jams:</h4>

            <div className="row">

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon-horizontal me-3"><img className="img-fluid" loading="lazy" src="https://img.itch.zone/aW1nLzI5NTUyMjcucG5n/315x250%23c/rRYiiS.png"/></div>
                <h4 className="title"><a href="https://gonemadstudios.itch.io/hammertime" target="_blank" rel="noopener noreferrer">HammerTime!</a></h4>
                <p className="related"><em>Global Game Jam 2020</em></p>
                <p className="description">Programación.</p>
              </div>

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon-horizontal me-3"><img className="img-fluid" loading="lazy" src="https://img.itch.zone/aW1nLzExMjczMDE1LnBuZw==/315x250%23c/Ar%2B3Xt.png"/></div>
                <h4 className="title"><a href="https://kikoalfaro.itch.io/la-root-del-bakalao" target="_blank" rel="noopener noreferrer">La Root del Bakalao</a></h4>
                <p className="related"><em>Global Game Jam 2023</em></p>
                <p className="description">Programación.</p>
              </div>

            </div>

            <h4 className="mt-4 mb-4">Proyectos Open Source:</h4>

            <div className="row">

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon me-3"><i class="bi bi-github"></i></div>
                <h4 className="title"><a href="https://github.com/AGM-GR/EdgeDetection" target="_blank" rel="noopener noreferrer">Edge Detection</a></h4>
                <p className="description">Adaptación del efecto de Unity: "Edge Detect Normals" a Post Processing Stack v2, añadiendo nuevas características y mejoras.</p>
              </div>

              <div className="col-lg-6 col-md-12 icon-box">
                <div className="icon me-3"><i class="bi bi-github"></i></div>
                <h4 className="title"><a href="https://github.com/AGM-GR/In-Game" target="_blank" rel="noopener noreferrer">In-Game</a></h4>
                <p className="description">Projecto fin de master. Videjuego escape room para VR (Microsoft Mixed Reality) hecho en Unity.</p>
              </div>

            </div>

          </div>
        </section>{/*<!-- End Services Section -->*/}

      </main>{/* End #main */}
    </>
  )
}

export default App
