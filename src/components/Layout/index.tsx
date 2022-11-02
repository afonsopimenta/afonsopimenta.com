import { ReactNode } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Footer from './Footer';
import useWindowScroll from '@/hooks/useWindowScroll';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const windowScroll = useWindowScroll();

  return (
    <>
      <Header />
      <main>{children}</main>
      {windowScroll !== undefined && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className={clsx(
            'text-custom-gray bg-white fixed bottom-4 right-4 grid place-items-center w-10 h-10 rounded-full md:hidden hover:bg-neutral-200 hover:translate-y-[-5px] transition-all duration-300 ease-out',
            windowScroll < 150 && 'bottom-[-3rem]'
          )}
          aria-label='Back to top'
        >
          <FontAwesomeIcon icon={faAngleUp} className='w-6 h-6' />
        </button>
      )}
      <Footer />
    </>
  );
};

export default Layout;
