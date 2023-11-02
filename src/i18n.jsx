import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: require('./locales/translations/en.json')
            },
            ru: {
                translation: require('./locales/translations/ru.json')
            },
        },
        supportedLngs: ['en', 'ru', 'uz'],
        lng: "en",
        fallbackLng: "en",
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'subdomain', 'path'],
            caches: ['cookie']
        },
    });

export default i18n