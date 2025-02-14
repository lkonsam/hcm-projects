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
    document.body.classList.toggle("dark", isDarkMode);
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
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
