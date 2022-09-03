import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import MobileLayout from "components/common/Layout/MobileLayout";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MobileLayout>
        <Component {...pageProps} />
      </MobileLayout>
    </ThemeProvider>
  );
}

export default MyApp;
