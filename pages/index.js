import GlobalState from "../context/GlobalState";

import Head from "next/head";

import Banner from "../components/Banner";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import MastercraftBackProject from "../components/MastercraftBackProject";
import SectionsWrapper from "../containers/SectionsWrapper";
import Stats from "../components/Stats";
import AboutProject from "../components/AboutProject";
import DonateModal from "../components/DonateModal";

import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Crowd Funding Product Page - Frontend Mentor Challenge</title>
        <meta name="description" content="A challenge by Frontend Mentor" />
      </Head>
      <div
        className={styles.design}
        style={{ backgroundImage: `url(images/active-states-bookmarked.jpg)` }}
      ></div>
      <GlobalState databaseData={data}>
        <DonateModal />
        <Banner imgUrl="images/image-hero-desktop.jpg">
          <MobileNavBar />
          <NavBar />
        </Banner>
        <SectionsWrapper>
          <MastercraftBackProject />
          <Stats />
          <AboutProject />
        </SectionsWrapper>
      </GlobalState>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetch(
    "https://crowdfunding-product-page-omega.vercel.app/api/data"
  );
  const resultJson = await result.json();
  return {
    props: {
      data: resultJson,
    },
  };
}
