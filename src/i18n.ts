import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationUzbek from "./translation/Uzbek/translation.json";
import translationRussian from "./translation/Russian/translation.json";

const resources = {
  ru: {
    translation: translationRussian,
  },
  uz: {
    translation: translationUzbek,
  },
};

const defaultLanguage = localStorage.getItem("language") || "uz";

i18next.use(initReactI18next).init({
  resources,
  lng: defaultLanguage, //default language
});

export default i18next;
