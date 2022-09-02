import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global-styles'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1 style={{color:'white'}}>Menu</h1>
      <Component {...pageProps} />
      <h1 style={{color:'white'}}>Footer</h1>
    </ThemeProvider>
  )
}

export default MyApp
