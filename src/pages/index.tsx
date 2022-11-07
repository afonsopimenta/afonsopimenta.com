import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@/components/Layout';
import Hero from '@/components/Sections/Hero';
import AboutMe from '@/components/Sections/AboutMe';
import Portfolio from '@/components/Sections/Portfolio';
import ContactMe from '@/components/Sections/ContactMe';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Afonso Pimenta</title>
        <meta name='description' content='Fullstack Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Hero />
        <AboutMe />
        <Portfolio />
        <ContactMe />
      </Layout>
    </>
  );
};

export default Home;
