import { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className='px-8 h-full md:px-28'>{children}</div>;
};

export default Container;
