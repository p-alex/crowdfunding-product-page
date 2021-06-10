import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <img src="/images/logo.svg" alt="mastercraft logo" />

        <ul className={styles.links}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
