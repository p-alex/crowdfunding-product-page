import GlobalState from '../context/GlobalState';
import Head from 'next/head';
import Banner from '../components/Banner';
import MobileNavBar from '../components/MobileNavBar';
import NavBar from '../components/NavBar';
import MastercraftBackProject from '../components/MastercraftBackProject';
import SectionsWrapper from '../containers/SectionsWrapper';
import Stats from '../components/Stats';
import AboutProject from '../components/AboutProject';
import DonateModal from '../components/DonateModal';
import FeedbackModal from '../components/FeedbackModal';
import SiteWrapper from '../containers/SiteWrapper';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://crowdfunding-product-page-omega.vercel.app'
    : 'http://localhost:3000';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Crowd Funding Product Page - Frontend Mentor Challenge</title>
        <meta name="description" content="A challenge by Frontend Mentor" />
        <link rel="shortcut icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>
      <GlobalState databaseData={data}>
        <SiteWrapper>
          <FeedbackModal />
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
        </SiteWrapper>
      </GlobalState>
    </>
  );
}

export async function getServerSideProps() {
  const result = await fetch(`${BASE_URL}/api/data`);
  const resultJson = await result.json();
  return {
    props: {
      data: resultJson,
    },
  };
}
