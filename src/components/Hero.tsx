import { useContext, useRef, useEffect } from "react";

import SectionsContext from "@/store/sections-context";

const Hero = () => {
  const { addSection } = useContext(SectionsContext);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    addSection('Home', heroRef.current?.offsetTop ?? 0);
  }, [addSection])

  return (
    <article className='md:pt-20 h-[600px] bg-red-500' ref={heroRef}>
      <h2 className='text-white text-lg font-bold'>Home</h2>
    </article>
  );
};

export default Hero;
