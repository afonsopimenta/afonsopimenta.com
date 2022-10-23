import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Afonso Pimenta</title>
        <meta name='description' content='Fullstack Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-3xl font-bold underline'>Hello, World!</h1>
      </main>
    </>
  );
};

export default Home;
