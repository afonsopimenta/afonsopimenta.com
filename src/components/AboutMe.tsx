import { useContext, useRef, useEffect } from 'react';

import SectionsContext from '@/store/sections-context';

const AboutMe = () => {
  const { addSection } = useContext(SectionsContext);
  const aboutMeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    addSection('About Me', aboutMeRef.current?.offsetTop ?? 0);
  }, [addSection]);

  return (
    <article className='h-[600px] bg-lime-500' ref={aboutMeRef}>
      <h2 className='text-white text-lg font-bold'>About Me</h2>
    </article>
  );
};

export default AboutMe;
