import { useContext } from "react";
import ProjectContext from "../context/project-context";
import styles from "../styles/MobileNavBar.module.css";
import MobileNavBarMenu from "./MobileNavBarMenu";
export default function MobileNavBar() {
  const context = useContext(ProjectContext);
  const { handleToggleMenu, isNavMenuActive } = context;
  const { isDonationProcessActive } = context.donation;
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_container}>
          <img src="/images/logo.svg" alt="mastercraft logo" />
          <button
            className={
              isNavMenuActive
                ? styles.hamburger_container + " " + styles.open
                : styles.hamburger_container
            }
            onClick={handleToggleMenu}
            tabIndex={isDonationProcessActive ? "-1" : "0"}
          >
            <div className={styles.hamburger}></div>
          </button>
        </div>
      </nav>
      {isNavMenuActive && (
        <MobileNavBarMenu handleToggleMenu={handleToggleMenu} />
      )}
    </>
  );
}
