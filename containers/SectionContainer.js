import styles from "../styles/SectionContainer.module.css";
export default function SectionContainer({ children }) {
  return <section className={styles.container}>{children}</section>;
}
