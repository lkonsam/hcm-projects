import styles from "./Logo.module.css";
import logo from "../../Assets/logo.png";

export default function Logo() {
  return (
    <>
      <div className={` flex-center ${styles.logo}`}>
        <img src={logo} className={styles.logoImg} alt="HCM" />
        <span className={styles.logoText}>High Court of Manipur</span>
      </div>
    </>
  );
}
