import { useTheme } from "../../../context/ThemeContext";

export default function TopHeader() {
  const { changeLanguage, isDarkMode, toggleTheme, adjustFontSize } =
    useTheme();

  return (
    <div className="flex flex-wrap justify-between px-6 py-2">
      {/* Sitemap, Contact Us, Feedback */}
      <span className="hidden md:inline-block">
        <button className="m-2 hover:text-brown-600">Sitemap</button>|
        <button className="m-2 hover:text-brown-600">Contact Us</button>|
        <button className="m-2 hover:text-brown-600">Feedback</button>|
        <button className="m-2 hover:text-brown-600">FAQs</button>
      </span>

      {/* Skip to Main Content and Screen Reader Access */}
      <span className="hidden md:inline-block">
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
