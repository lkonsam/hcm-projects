import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FooterLink({ label, link }) {
  return (
    <Link
      to={link}
      className="flex items-center text-gray-800   no-underline  hover:text-amber-900"
    >
      <MdOutlineKeyboardArrowRight className="text-lg" />
      {label}
    </Link>
  );
}
