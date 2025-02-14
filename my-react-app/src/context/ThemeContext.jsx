import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load theme, font size, and language from localStorage or set defaults
  const [language, setLanguage] = useState(
    () => localStorage.getItem("preferredLanguage") || "en"
  );
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("isDarkMode") === "true"
  );
  const [fontSize, setFontSize] = useState(
    () => parseInt(localStorage.getItem("fontSize")) || 16
  );

  // Change language and save to localStorage
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLanguageInGoogleTranslate(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  useEffect(() => {
    // Check if the script is already loaded
    if (!window.googleTranslateScriptLoaded && !window.google?.translate) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.id = "google-translate-script"; // Optional: add an ID for tracking
      script.async = true;
      document.body.appendChild(script);

      // Define the global callback
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
          },
          "google_translate_element"
        );
      };

      // Mark the script as loaded
      window.googleTranslateScriptLoaded = true;

      return () => {
        // Cleanup script if needed
        document.body.removeChild(script);
      };
    }
  }, []);

  const setLanguageInGoogleTranslate = (lang) => {
    const select = document.querySelector("#google_translate_element select");
    if (!select) return;
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  };

  // Toggle dark mode and save to localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", newTheme);
    document.body.classList.toggle("dark", newTheme);
  };

  // Adjust font size and save to localStorage
  const adjustFontSize = (adjustment) => {
    const newFontSize =
      adjustment === 0 ? 16 : Math.min(20, Math.max(12, fontSize + adjustment));
    setFontSize(newFontSize);
    localStorage.setItem("fontSize", newFontSize);
    document.documentElement.style.fontSize = `${newFontSize}px`;
  };

  useEffect(() => {
    // Apply the saved theme and font size on mount
    document.documentElement.classList.toggle("dark", isDarkMode); // Use <html> tag
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [isDarkMode, fontSize]);

  return (
    <ThemeContext.Provider
      value={{
        language,
        changeLanguage,
        isDarkMode,
        toggleTheme,
        fontSize,
        adjustFontSize,
      }}
    >
      <div id="google_translate_element" className="hidden"></div>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
