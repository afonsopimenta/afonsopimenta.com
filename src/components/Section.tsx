import { ReactNode, useContext, useRef, useEffect } from 'react';

import Container from '@/components/UI/Container';
import SectionsContext from '@/store/sections-context';

type SectionProps = {
  title: string
  children?: ReactNode;
  className?: string;
};

const Section = ({ title, children, className }: SectionProps) => {
  const { addSection } = useContext(SectionsContext);
  const reference = useRef<HTMLElement>(null);

  useEffect(() => {
    addSection(title, reference.current?.offsetTop ?? 0);
  }, [addSection]);

  return (
    <article className={className} ref={reference}>
      <Container>{children}</Container>
    </article>
  );
};

export default Section;
