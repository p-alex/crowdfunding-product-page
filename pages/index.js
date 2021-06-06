import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <>
      <div
        className={styles.design}
        style={{ backgroundImage: `url(images/mobile-design.jpg)` }}
      ></div>
      <Banner>
        <MobileNavBar />
        <NavBar />
      </Banner>
    </>
  );
}
