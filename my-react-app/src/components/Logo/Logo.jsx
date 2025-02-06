import logo from "../../Assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={logo} className="h-15" alt="HCM" />
      <span className="text-[18px] font-bold leading-[27px] tracking-[0.02em] text-[var(--color-brown-0)]">
        High Court of Manipur
      </span>
    </div>
  );
}
