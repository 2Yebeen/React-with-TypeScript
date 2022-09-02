import type { AppProps } from 'next/app';
// import { GlobalStyle } from '../styles/global-styles';
// import { Theme } from '../styles/theme';
// import { ThemeProvider } from '../styles/styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
