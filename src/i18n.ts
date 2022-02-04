import { use } from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const locale = use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'ru',
  detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
  },
});

export default locale;