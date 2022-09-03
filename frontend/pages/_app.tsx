import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
