import { Link, useLocation } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { fetchMenu } from "../../../api/api";

export default function Header() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu().then((data) => setMenu(data));
  }, []);

  return (
    <>
      <header className="md:max-w-9/10 mx-auto">
        <NavLink menu={menu} />
      </header>
    </>
  );
}

function NavLink({ menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Track the current URL

  // Close menu when URL changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="flex items-center justify-between px-4 md:px-0 py-4 mb-4">
      {/* Logo Section */}
      <div className="flex items-center ps-2">
        <Logo />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        {/* Menu Items */}
        <ul className="flex flex-col items-start mt-16 px-6 space-y-4">
          <MainMenu menu={menu} closeMenu={() => setIsOpen(false)} />
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-end px-4">
        <MainMenu menu={menu} />
      </ul>
    </nav>
  );
}

function MainMenu({ menu, closeMenu }) {
  const location = useLocation(); // Track current URL

  return (
    <>
      {menu.map((item, ind) => {
        // Get the base path of the item URL
        const basePath = item.url.split(/[?#]/)[0]; // Removes parameters or hash

        const isActive =
          basePath === "/"
            ? location.pathname === "/" // Exact match for the homepage
            : location.pathname.startsWith(basePath); // Partial match for other paths

        return (
          <li key={ind} className="md:m-2">
            <Link
              to={item.url}
              onClick={() => closeMenu && closeMenu()} // Close mobile menu on click
              className={`text-xl font-bold text-white hover:border-white ${
                isActive
                  ? "border-b-4 border-blue-500" // Active style
                  : "hover:border-b-4"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </>
  );
}
