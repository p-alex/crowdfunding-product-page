import styles from "../styles/MobileNavBarMenu.module.css";
export default function MobileNavBarMenu({ toggleOff }) {
  return (
    <>
      <div className={styles.backdrop} onClick={toggleOff}></div>
      <ul className={styles.menu}>
        <li>
          <a href="#" onClick={toggleOff}>
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleOff}>
            Discover
          </a>
        </li>
        <li>
          <a href="#" onClick={toggleOff}>
            Get Started
          </a>
        </li>
      </ul>
    </>
  );
}
