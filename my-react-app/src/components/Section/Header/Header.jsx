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
        <NavLink menu={menu} />
      </header>
    </>
  );
}

function NavLink({ menu }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4">
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
          <Link
            to={item.url}
            className="hover:text-[var(--color-brown-0)] hover:border-b-4"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
}
