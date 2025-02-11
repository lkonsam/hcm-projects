import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FooterLink({ label, link }) {
  return (
    <Link
      to={link}
      className="flex items-center text-white text-sm font-light no-underline hover:text-gray-300"
    >
      <MdOutlineKeyboardArrowRight className="text-lg" />
      {label}
    </Link>
  );
}
