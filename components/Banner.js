import styles from "../styles/Banner.module.css";
export default function Banner({ children, imgUrl }) {
  return (
    <header
      className={styles.banner}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </header>
  );
}
