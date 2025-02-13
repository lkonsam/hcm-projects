import { createContext, useState, useContext, useEffect } from "react";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  // Load the saved language from localStorage or default to "en"
  const [language, setLanguage] = useState(
    () => localStorage.getItem("preferredLanguage") || "en"
  );

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLanguageInGoogleTranslate(lang);

    // Save the selected language to localStorage
    localStorage.setItem("preferredLanguage", lang);
  };

  const setLanguageInGoogleTranslate = (lang) => {
    const select = document.querySelector("#google_translate_element select");
    if (!select) {
      //   console.error("Google Translate dropdown not found.");
      return;
    }

    // Set the selected language
    select.value = lang;

    // Trigger a change event on the dropdown
    select.dispatchEvent(new Event("change"));
  };

  useEffect(() => {
    // Load the saved language into Google Translate when the component mounts
    setLanguageInGoogleTranslate(language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
