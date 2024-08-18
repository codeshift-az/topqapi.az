import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEN from "./locales/en/translations.json";
import translationsAZ from "./locales/az/translations.json";
import translationsRU from "./locales/ru/translations.json";

// The translations
const resources = {
  en: translationsEN,
  az: translationsAZ,
  ru: translationsRU,
};

// Language detection
const lng = localStorage.getItem("LANG")?.toString();

// Fallback language
const fallbackLng = "en";

// Supported languages
const supportedLngs = ["en", "az", "ru"];

// Development mode
const debug = import.meta.env.MODE === "development";

i18n.use(initReactI18next).init({
  lng,
  debug,
  resources,
  fallbackLng,
  supportedLngs,
});

export default i18n;
