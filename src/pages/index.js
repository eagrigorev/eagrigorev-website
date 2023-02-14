import Head from 'next/head';
import { SITE_TITLE } from 'utils/const';

const Home = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE} • Home</title>
      </Head>
      <h1>Initial setup</h1>;
    </>
  );
};

export default Home;
