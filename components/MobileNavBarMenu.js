import styles from "../styles/MobileNavBarMenu.module.css";
export default function MobileNavBarMenu({ handleToggleMenu }) {
  return (
    <>
      <div className={styles.backdrop} onClick={handleToggleMenu}></div>
      <ul className={styles.menu}>
        <li>
          <a href="#" onClick={handleToggleMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={handleToggleMenu}>
            Discover
          </a>
        </li>
        <li>
          <a href="#" onClick={handleToggleMenu}>
            Get Started
          </a>
        </li>
      </ul>
    </>
  );
}
