import { useContext, useRef, useEffect } from 'react';

import SectionsContext from '@/store/sections-context';

const ContactMe = () => {
  const { addSection } = useContext(SectionsContext);
  const contactMeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    addSection('Contact Me', contactMeRef.current?.offsetTop ?? 0);
  }, [addSection]);

  return (
    <article className='h-[600px] bg-lime-500' ref={contactMeRef}>
      <h2 className='text-white text-lg font-bold'>Contact Me</h2>
    </article>
  );
};

export default ContactMe;
