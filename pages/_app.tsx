import '../styles/global.css';

import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ThemeProvider } from 'theme-ui';

import MyTheme from '../styles/MyTheme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={MyTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
