import { useState } from "react";
import styles from "../styles/MobileNavBar.module.css";
import MobileNavBarMenu from "./MobileNavBarMenu";
export default function MobileNavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {isActive && (
        <MobileNavBarMenu toggleOff={() => setIsActive(!isActive)} />
      )}
      <nav className={styles.nav}>
        <img src="/images/logo.svg" />
        <div
          className={
            isActive
              ? styles.hamburger_container + " " + styles.open
              : styles.hamburger_container
          }
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.hamburger}></div>
        </div>
      </nav>
    </>
  );
}
