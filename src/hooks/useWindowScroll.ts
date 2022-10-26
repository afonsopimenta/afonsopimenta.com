import { useState, useEffect } from 'react';

type Scroll = number | undefined;

const useWindowScroll = () => {
  const [windowScroll, setWindowScroll] = useState<Scroll>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return windowScroll;
};

export default useWindowScroll;
