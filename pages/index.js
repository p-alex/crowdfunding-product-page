import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
export default function Home() {
  return (
    <>
      <div
        className={styles.design}
        style={{ backgroundImage: "url(images/active-states-bookmarked.jpg)" }}
      ></div>
      <Banner />
    </>
  );
}
