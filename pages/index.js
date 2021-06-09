import Banner from "../components/Banner";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import MastercraftBackProject from "../components/MastercraftBackProject";
import SectionsWrapper from "../containers/SectionsWrapper";
import Stats from "../components/Stats";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div
        className={styles.design}
        style={{ backgroundImage: `url(images/active-states-bookmarked.jpg)` }}
      ></div>
      <Banner imgUrl="images/image-hero-desktop.jpg">
        <MobileNavBar />
        <NavBar />
      </Banner>
      <SectionsWrapper>
        <MastercraftBackProject />
        <Stats />
      </SectionsWrapper>
    </>
  );
}
