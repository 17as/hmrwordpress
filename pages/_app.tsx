import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../globalStyles'

const theme = {
  colors: {
    primary: '#00308f',
    lightbackground: '#f0ffff',
  },
  spacing: {
    xs2: '4px',
    xs1: '6px',
    xs: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>{' '}
    </>
  )
}

export default MyApp
