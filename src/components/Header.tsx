import { RefObject, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twirl as Hamburger } from 'hamburger-react';
import clsx from 'clsx';

import Container from '@/components/UI/Container';
import logo from '@/assets/images/logo.png';

type HeaderParams = {
  sections: {
    title: string;
    ref: RefObject<HTMLElement>;
  }[];
};

const Header = ({ sections }: HeaderParams) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='py-4 z-10 bg-custom-gray text-white'>
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
                'flex text-sm font-bold text-left max-md:flex-col max-md:absolute max-md:right-0 max-md:top-16 max-md:transition-all max-md:duration-500 max-md:overflow-hidden md:gap-7',
                isMenuOpen ? 'max-md:h-44' : 'max-md:h-0'
              )}
            >
              {sections.map(({ title, ref }) => (
                <li key={title} className='max-md:m-3 max-md:mr-7 text-right'>
                  <button
                    className='p-3 hover:text-custom-cyan'
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({
                        top: ref.current?.offsetTop || 0,
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
