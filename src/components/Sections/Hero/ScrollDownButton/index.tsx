import { useContext } from 'react';

import SectionsContext from '@/store/sections-context';

const ScrollDownButton = () => {
  const { sections } = useContext(SectionsContext);
  const aboutMeOffsetTop = sections['About Me'];

  const handleScrollDown = () => {
    window.scrollTo({
      top: aboutMeOffsetTop - 80,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative bottom-20 flex justify-center'>
      <button
        className='flex justify-center cursor-pointer w-6 h-10 border-2 border-neutral-500 rounded-xl pt-2'
        onClick={handleScrollDown}
      >
        <div className='w-1 h-2 rounded-xl bg-neutral-500 animate-scroll' />
      </button>
    </div>
  );
};

export default ScrollDownButton;
