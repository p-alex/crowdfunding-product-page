import { useState } from "react";
import styles from "../styles/MobileNavBar.module.css";
import MobileNavBarMenu from "./MobileNavBarMenu";
export default function MobileNavBar() {
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => setIsActive(!isActive);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_container}>
          <img src="/images/logo.svg" alt="mastercraft logo" />
          <button
            className={
              isActive
                ? styles.hamburger_container + " " + styles.open
                : styles.hamburger_container
            }
            onClick={handleToggleMenu}
            tabIndex="0"
          >
            <div className={styles.hamburger}></div>
          </button>
        </div>
      </nav>
      {isActive && <MobileNavBarMenu handleToggleMenu={handleToggleMenu} />}
    </>
  );
}
