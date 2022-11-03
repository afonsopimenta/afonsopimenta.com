import { ReactNode, useContext, useRef, useEffect, CSSProperties } from 'react';

import Container from '@/components/UI/Container';
import SectionsContext from '@/store/sections-context';

type SectionProps = {
  title: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Section = ({ title, children, className, style }: SectionProps) => {
  const { updateSection } = useContext(SectionsContext);
  const reference = useRef<HTMLElement>(null);

  useEffect(() => {
    updateSection(title, reference.current?.offsetTop ?? 0);

    window.addEventListener('resize', () => {
      updateSection(title, reference.current?.offsetTop ?? 0);
    })
  }, [updateSection, title]);

  return (
    <article className={className} style={style} ref={reference}>
      <Container>{children}</Container>
    </article>
  );
};

export default Section;
