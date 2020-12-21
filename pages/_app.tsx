import '../styles/global.css';

import { AuthProvider } from 'hooks/useAuth';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ThemeProvider } from 'theme-ui';

import MyTheme from '../styles/MyTheme';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={MyTheme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
