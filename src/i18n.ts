// i18n → The translation system itself.
import i18n from "i18next";

// initReactI18next → The component that will connect i18next to React.
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ar from "./locales/ar.json";

// This means: Connect i18next with React
i18n
  .use(initReactI18next)
  //   Inside .init({ }) we will start setting the language and translation settings.
  .init({
    //  means: Our languages ​​and translations are available here inside resources.
    resources: {
      en: {
        translation: en,
      },

      ar: {
        translation: ar,
      },

      // end resources
    },
    // lng means the current language that the website will start with.
    lng: "en",
  });