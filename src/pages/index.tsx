import { RefObject, useRef } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useWindowScroll from '@/hooks/useWindowScroll';

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

  const windowScroll = useWindowScroll();

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
      {windowScroll !== undefined && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className={clsx(
            'text-custom-gray bg-white fixed bottom-4 right-4 grid place-items-center w-10 h-10 rounded-full md:hidden hover:bg-neutral-200 hover:translate-y-[-3px] transition-all duration-300 ease-out',
            windowScroll < 150 && 'bottom-[-3rem]'
          )}
          aria-label='Back to top'
        >
          <FontAwesomeIcon icon={faAngleUp} className='w-6 h-6' />
        </button>
      )}
      <Footer />
    </>
  );
};

export default Home;
