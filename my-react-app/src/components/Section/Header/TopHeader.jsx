import { useState } from "react";
import { useTranslation } from "../../../context/TranslationContext";

export default function TopHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Default font size in px
  const { changeLanguage } = useTranslation();

  // Handle dark mode toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  // Handle font size adjustments
  const adjustFontSize = (adjustment) => {
    if (adjustment === 0) {
      setFontSize(16);
      document.documentElement.style.fontSize = `16px`;
    } else {
      setFontSize((prevSize) =>
        Math.min(24, Math.max(12, prevSize + adjustment))
      );
      document.documentElement.style.fontSize = `${fontSize + adjustment}px`;
    }
  };

  return (
    <div className="flex flex-wrap justify-between px-6 py-2  ">
      {/* Sitemap, Contact Us, Feedback */}
      <span>
        <button className="m-2 hover:text-brown-600">Sitemap</button>|
        <button className="m-2 hover:text-brown-600">Contact Us</button>|
        <button className="m-2 hover:text-brown-600">Feedback</button>|
        <button className="m-2 hover:text-brown-600">FAQs</button>
      </span>

      {/* Skip to Main Content and Screen Reader Access */}
      <span>
        <a href="#main-content" className="m-2 hover:text-brown-600">
          Skip to Main Content
        </a>
        |
        <button className="m-2 hover:text-brown-600">
          Screen Reader Access
        </button>
      </span>

      {/* Font Size Adjustments */}
      <span>
        <button
          onClick={() => adjustFontSize(-2)}
          className="m-2 hover:text-brown-600"
        >
          -A
        </button>
        |
        <button
          className="m-2 hover:text-brown-600"
          onClick={() => adjustFontSize(0)}
        >
          A
        </button>
        |
        <button
          onClick={() => adjustFontSize(2)}
          className="m-2 hover:text-brown-600"
        >
          +A
        </button>
      </span>

      {/* Dark/Light Mode Toggle */}
      <span>
        <button onClick={toggleTheme} className="m-2 hover:text-brown-600">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </span>

      {/* Language Toggle */}
      <span>
        <div id="google_translate_element" className="hidden"></div>
        <button onClick={() => changeLanguage("en")} className="m-2">
          English
        </button>
        |
        <button onClick={() => changeLanguage("hi")} className="m-2">
          हिंदी
        </button>
      </span>
    </div>
  );
}
