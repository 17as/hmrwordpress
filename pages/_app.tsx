import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyles";

const theme = {
  colors: {
    primary: "#00308f",
    lightblue: "#f0ffff",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>{" "}
    </>
  );
}

export default MyApp;
