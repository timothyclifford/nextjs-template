import '../styles/global.css';

import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'theme-ui';

import { AuthProvider } from '../auth';
import MyTheme from '../styles/MyTheme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthProvider>
      <ThemeProvider theme={MyTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}
