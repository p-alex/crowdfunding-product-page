import { AnchorTag } from "../component-library/component-library";
import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <img src="/images/logo.svg" alt="mastercraft logo" />

        <ul className={styles.links}>
          <li>
            <AnchorTag url="#">About</AnchorTag>
          </li>
          <li>
            <AnchorTag url="#">Discover</AnchorTag>
          </li>
          <li>
            <AnchorTag url="#">Get Started</AnchorTag>
          </li>
        </ul>
      </div>
    </nav>
  );
}
