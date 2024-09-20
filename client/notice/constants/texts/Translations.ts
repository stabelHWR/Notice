import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const translationsObj = {
  en: {
    welcome: 'Welcome',
    tellUsAboutYourself: 'Tell us about yourself!',
    question: 'question1Question',
    choices1: 'choices111',
    choices2: 'choices2',
    choices3: 'choices3',
    question2: 'question2Question',
    submit: 'Submit',
    practice: 'Practice',
    tutorials: 'Tutorials',
    progress: 'Progress',
    settings: 'Settings',
  },
  de: {
    welcome: 'Wilkommen',
    tellUsAboutYourself: 'Erzähl uns über dich!',
    question: 'Frage1',
    choices1: 'auswahl1',
    choices2: 'auswahl2',
    choices3: 'auswahl3',
    question2: 'Frage2',
    submit: 'Weiter',
    practice: 'Übungen',
    tutorials: 'Tutorials',
    progress: 'Fortschritt',
    settings: 'Einstellungen',
  },
};

const i18n = new I18n(translationsObj);

i18n.locale = getLocales()[0].languageCode ?? 'en';

i18n.enableFallback = true;
export default i18n;
