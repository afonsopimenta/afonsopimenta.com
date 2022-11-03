import { useContext } from 'react';

import Section from '@/components/Sections/Section';
import heroBackground from '@/assets/images/hero-background.jpg';
import SectionsContext from '@/store/sections-context';
import useWindowSize from '@/hooks/useWindowSize';
import ScrollDownButton from './ScrollDownButton';

const Hero = () => {
  const { sections } = useContext(SectionsContext);
  const contactMeOffsetTop = sections['Contact Me'];

  const windowSize = useWindowSize();
  const isSmallScreen =
    windowSize.width !== undefined ? windowSize.width < 768 : false;

  const handleButtonClick = () => {
    window.scrollTo({
      top: isSmallScreen ? contactMeOffsetTop : contactMeOffsetTop - 80,
      behavior: 'smooth',
    });
  };

  return (
    <Section
      title='Home'
      className='max-md:py-32 bg-center bg-cover md:h-screen'
      style={{
        backgroundImage: `linear-gradient(to bottom, #171a1d41, #171a1d), url('${heroBackground.src}')`,
      }}
    >
      <div className='flex h-full items-center'>
        <div>
          <h2 className='text-white text-3xl font-bold font-saira md:text-5xl'>
            Hi, I'm <span className='text-custom-cyan'>Afonso Pimenta</span>
          </h2>
          <div className='text-white text-2xl font-bold font-saira md:text-4xl'>
            A Fullstack Developer
          </div>
          <p className='my-5 text-base leading-7 max-w-md'>
            I'm a developer with a strong passion for programming and problem
            solving. I love having new challenges to overcome and learn from.
          </p>
          <button
            className='text-white text-lg text-opacity-90 bg-custom-cyan py-2 px-8 font-bold rounded-md transition-shadow duration-300 ease-in-out md:text-xl hover:text-opacity-100 hover:shadow-glow'
            onClick={handleButtonClick}
          >
            Hire Me
          </button>
        </div>
      </div>
      {!isSmallScreen && <ScrollDownButton />}
    </Section>
  );
};

export default Hero;
