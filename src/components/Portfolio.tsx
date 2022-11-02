import { useContext, useRef, useEffect } from "react";

import SectionsContext from "@/store/sections-context";

const Portfolio = () => {
  const { addSection } = useContext(SectionsContext);
  const protfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    addSection('Portfolio', protfolioRef.current?.offsetTop ?? 0);
  }, [addSection])

  return (
    <article className='h-[600px] bg-red-500' ref={protfolioRef}>
      <h2 className='text-white text-lg font-bold'>Portfolio</h2>
    </article>
  );
};

export default Portfolio;