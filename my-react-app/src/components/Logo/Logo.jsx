import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 hover:cursor-pointer">
      <img src={logo} className="h-15" alt="HCM" />
      <span className="text-xl font-bold leading-[27px] tracking-[0.02em] text-white ">
        High Court of Manipur
      </span>
    </div>
  );
}
