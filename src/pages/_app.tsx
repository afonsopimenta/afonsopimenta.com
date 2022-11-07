import type { AppProps } from 'next/app';

import { SectionsContextProvider } from '@/store/sections-context';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SectionsContextProvider>
      <Component {...pageProps} />
    </SectionsContextProvider>
  );
}

export default MyApp;
