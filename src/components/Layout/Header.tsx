import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { Twirl as Hamburger } from 'hamburger-react';

import Container from '@/components/UI/Container';
import SectionsContext from '@/store/sections-context';
import logo from '@/assets/images/logo.png';
import useWindowSize from '@/hooks/useWindowSize';
import useWindowScroll from '@/hooks/useWindowScroll';

const Header = () => {
  const { sections } = useContext(SectionsContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const windowScroll = useWindowScroll();

  const isSmallScreen =
    windowSize.width !== undefined ? windowSize.width < 768 : false;
  const hasScrolled = windowScroll !== undefined ? windowScroll > 0 : false;

  const sectionsArray = [];
  for (const key in sections) {
    sectionsArray.push({ title: key, offsetTop: sections[key] });
  }

  return (
    <header
      className={clsx(
        'py-4 text-white md:fixed top-0 right-0 left-0 transition-colors duration-500 ease-out',
        hasScrolled && 'bg-custom-gray'
      )}
    >
      <Container>
        <nav className='flex justify-between items-center'>
          <div className='text-[0] cursor-pointer w-12'>
            <Link href='/'>
              <a>
                <Image src={logo} alt='Logo' />
              </a>
            </Link>
          </div>

          <div>
            <div className='md:hidden'>
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                direction='left'
                label='Toggle Menu'
              />
            </div>
            <ul
              className={clsx(
                'flex text-sm font-bold text-left max-md:flex-col max-md:absolute max-md:right-8 max-md:top-20 max-md:transition-all max-md:duration-500 max-md:overflow-hidden md:gap-7',
                isMenuOpen ? 'max-md:h-44' : 'max-md:h-0'
              )}
            >
              {sectionsArray.map(({ title, offsetTop }) => (
                <li key={title} className='text-right'>
                  <button
                    className='p-3 hover:text-custom-cyan transition-color duration-500 ease-out'
                    onClick={() => {
                      setIsMenuOpen(false);

                      window.scrollTo({
                        top: isSmallScreen ? offsetTop : offsetTop - 80,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;