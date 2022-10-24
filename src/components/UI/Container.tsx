import { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className='px-8'>{children}</div>;
};

export default Container;
