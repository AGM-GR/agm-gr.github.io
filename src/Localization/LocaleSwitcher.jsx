import { useTranslation } from "react-i18next";
import { supportedLngs } from "./config";

import './LocaleSwitcher.css';

export default function LocaleSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="locale-switcher dropup text-light">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><i className="bi bi-translate"></i></a>
      <ul className="dropdown-menu dropdown-menu-dark">
      {Object.entries(supportedLngs).map(([code, name]) => (
        <li key={code}><button className={"dropdown-item" + (code == i18n.resolvedLanguage ? " active" : "")} onClick={() => i18n.changeLanguage(code)}>
          {name}
        </button></li>
      ))}
      </ul>
    </div>
  );
}
