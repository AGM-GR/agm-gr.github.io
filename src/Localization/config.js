// Core i18next library.
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
  en: "English",
  es: "Español",
};

i18n
  // Wire up the backend as a plugin.
  .use(HttpApi)
  // Auto-detect browser language
  .use(LanguageDetector)
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used when a user visits our site for the first time.
    //lng: "en",

    // Fallback locale used when a translation is missing in the active locale.
    fallbackLng: "en",

    // Explicitly tell i18next our supported locales.
    supportedLngs: Object.keys(supportedLngs),

    // Backend download only locale code language
    load: 'languageOnly',

    // Enables useful output in the browser’s dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it ensures that i18next escapes any code in
    // translation messages, safeguarding against XSS (cross-site scripting) attacks.
    // However, React does this escaping itself, so we turn it off in i18next.
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
