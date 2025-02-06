import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const menu = [
    { title: "Home", url: "/" },
    { title: "About", url: "/" },
    { title: "Services", url: "/" },
    { title: "Contact", url: "/" },
  ];
  return (
    <>
      <header>
        <TopHeader />
        <NavLink menu={menu} />
      </header>
    </>
  );
}

function NavLink({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
      {/* Logo Section */}
      <div className="flex items-center">
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
          <MainMenu menu={menu} />
          <li>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-end px-4">
        <MainMenu menu={menu} />
      </ul>
    </nav>
  );
}

function MainMenu({ menu }) {
  return (
    <>
      {menu.map((item, ind) => (
        <li key={ind} className="md:m-2">
          <Link to={item.url} className="hover:text-red-900">
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
}

function TopHeader() {
  return (
    <div className="flex flex-wrap justify-between px-6 py-2 bg-gray-100">
      <span>
        <button className="m-2 hover:text-red-900">Sitemap</button>|
        <button className="m-2 hover:text-red-900">Contact Us</button>|
        <button className="m-2 hover:text-red-900">Feedback</button>|
        <button className="m-2 hover:text-red-900">FAQs</button>
      </span>
      <span>
        <button className="m-2 hover:text-red-900">Skip to Main Content</button>
        |
        <button className="m-2 hover:text-red-900">Screen Reader Access</button>
      </span>
      <span>
        <button className="m-2 hover:text-red-900">-A</button>|
        <button className="m-2 hover:text-red-900">A</button>|
        <button className="m-2 hover:text-red-900">+A</button>
      </span>
      <span>
        <button className="m-2 hover:text-red-900">English</button>|
        <button className="m-2 hover:text-red-900">Hindi</button>
      </span>
    </div>
  );
}
