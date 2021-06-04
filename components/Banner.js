import styles from "../styles/Banner.module.css";
export default function Banner() {
  return (
    <header
      className={styles.banner}
      style={{ backgroundImage: "url(images/image-hero-desktop.jpg)" }}
    ></header>
  );
}
