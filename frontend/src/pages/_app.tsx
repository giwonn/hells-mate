import { ThemeProvider } from "@emotion/react";
import MobileLayout from "components/common/Layout/MobileLayout";
import type { AppProps } from "next/app";
import { theme } from "styles/theme";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MobileLayout>
        <Component {...pageProps} />
      </MobileLayout>
    </ThemeProvider>
  );
}

export default MyApp;
