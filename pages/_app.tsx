import '../styles/global.css';

import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ThemeProvider } from 'theme-ui';

import Theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
