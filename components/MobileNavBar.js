import styles from "../styles/MobileNavBar.module.css";
import MobileNavBarMenu from "./MobileNavBarMenu";
export default function MobileNavBar({ isActive, handleToggleMenu }) {
  return (
    <>
      {isActive && <MobileNavBarMenu handleToggleMenu={handleToggleMenu} />}
      <nav className={styles.nav}>
        <div className={styles.nav_container}>
          <img src="/images/logo.svg" />
          <div
            className={
              isActive
                ? styles.hamburger_container + " " + styles.open
                : styles.hamburger_container
            }
            onClick={handleToggleMenu}
          >
            <div className={styles.hamburger}></div>
          </div>
        </div>
      </nav>
    </>
  );
}
