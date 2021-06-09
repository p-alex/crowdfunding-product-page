import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import MastercraftBackProject from "../components/MastercraftBackProject";
import SectionsWrapper from "../containers/SectionsWrapper";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const handleToggleMenu = () => setIsActive(!isActive);
  return (
    <>
      <div
        className={styles.design}
        style={{ backgroundImage: `url(images/active-states-bookmarked.jpg)` }}
      ></div>
      <Banner>
        <MobileNavBar isActive={isActive} handleToggleMenu={handleToggleMenu} />
        <NavBar />
      </Banner>
      <SectionsWrapper>
        <MastercraftBackProject />
      </SectionsWrapper>
    </>
  );
}
