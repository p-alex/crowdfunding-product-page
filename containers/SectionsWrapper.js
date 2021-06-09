import styles from "../styles/SectionsWrapper.module.css";
export default function SectionsWrapper({ children }) {
  return <main className={styles.sections_container}>{children}</main>;
}
