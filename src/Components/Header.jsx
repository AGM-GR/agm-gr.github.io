import { useState } from 'react';
import { useTranslation } from "react-i18next";

import './Header.css';

import LocaleSwitcher from '../Localization/LocaleSwitcher.jsx';

export default function Header({sectionsList, currentSection}) {
  const [showHeader, setShowHeader] = useState(false);
  const { t } = useTranslation();

  function toggleHeader() {
    setShowHeader(!showHeader);
  }

  return (
    <>
    {/*======= Mobile nav toggle button =======*/}
    <button className="mobile-nav-toggle d-xl-none" onClick={toggleHeader}><i className="bi bi-list"></i></button>

    {/*======= Header =======*/}
    <header id="header" className={showHeader ? "show" : ""}>
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
            {sectionsList.map((section, index) => (
              <li key={index}>
                <a href={'#'+section.id} className={"nav-link scrollto " + (index == currentSection ? "active" : "")}>
                  <i className={section.icon}></i>
                  <span>{t(section.key)}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="d-flex locale">
        <LocaleSwitcher />
      </div>
    </header>
    </>
  );
}
