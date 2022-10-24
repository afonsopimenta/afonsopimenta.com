import { RefObject } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

type SectionData = {
  title: string;
  Component: ({
    title,
    reference,
  }: {
    title: string;
    reference: RefObject<HTMLElement>;
  }) => JSX.Element;
  ref: RefObject<HTMLElement>;
};

const Home: NextPage = () => {
  const sections: SectionData[] = [];

  return (
    <>
      <Head>
        <title>Afonso Pimenta</title>
        <meta name='description' content='Fullstack Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header
        sections={sections.map((section) => ({
          title: section.title,
          ref: section.ref,
        }))}
      />
      <main>
        {sections.map(({ title, Component }, index) => (
          <Component
            key={title}
            title={title}
            reference={sections[index].ref}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
