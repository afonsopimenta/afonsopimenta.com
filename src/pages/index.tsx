import { RefObject, useRef } from 'react';
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
  const sections: SectionData[] = [
    {
      title: 'Home',
      Component: ({ title, reference }) => {
        return (
          <section ref={reference} className='bg-red-500 md:pt-20'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <div className='h-[60vh]'></div>
          </section>
        );
      },
      ref: useRef<HTMLElement>(null),
    },
    {
      title: 'About Me',
      Component: ({ title, reference }) => {
        return (
          <section ref={reference} className='bg-cyan-500'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <div className='h-[60vh]'></div>
          </section>
        );
      },
      ref: useRef<HTMLElement>(null),
    },
    {
      title: 'Portfolio',
      Component: ({ title, reference }) => {
        return (
          <section ref={reference} className='bg-lime-500'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <div className='h-[60vh]'></div>
          </section>
        );
      },
      ref: useRef<HTMLElement>(null),
    },
    {
      title: 'Contact Me',
      Component: ({ title, reference }) => {
        return (
          <section ref={reference} className='bg-pink-500'>
            <h2 className='text-white text-2xl font-bold'>{title}</h2>
            <div className='h-[60vh]'></div>
          </section>
        );
      },
      ref: useRef<HTMLElement>(null),
    },
  ];

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
