import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function FooterLink({ label, link }) {
  return (
    <Link
      to={link}
      className="flex items-center text-white   no-underline  hover:underline"
    >
      <MdOutlineKeyboardArrowRight className="text-lg" />
      {label}
    </Link>
  );
}
