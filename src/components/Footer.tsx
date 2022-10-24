import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Container from '@/components/UI/Container';

const Footer = () => {
  return (
    <footer className='py-4 bg-custom-gray border-t-2 border-neutral-500'>
      <Container>
        <div className='flex max-md:flex-col justify-between items-center gap-1'>
          <div>&copy; Copyright 2022 - Afonso Pimenta</div>
          <div className='flex gap-3 md:gap-6'>
            <a
              href='https://github.com/afonsopimenta'
              target='_blank'
              rel='noopener noreferrer'
              className='grid place-items-center text-white w-8 h-8 rounded-full hover:text-custom-gray hover:bg-white transition-colors duration-500 ease-out'
            >
              <FontAwesomeIcon icon={faGithub} className='w-5 h-5' />
            </a>
            <a
              href='https://www.linkedin.com/in/afonsopimentasilva/'
              target='_blank'
              rel='noopener noreferrer'
              className='grid place-items-center text-white w-8 h-8 rounded-full hover:text-custom-gray hover:bg-white transition-colors duration-500 ease-out'
            >
              <FontAwesomeIcon icon={faLinkedinIn} className='w-5 h-5' />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
