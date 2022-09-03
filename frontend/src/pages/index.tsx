import type { NextPage } from "next";

declare global {
  interface Window {
    Kakao: any;
  }
}
const Home: NextPage = () => {
  return (
    <>
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <div>Hello World</div>
    </>
  );
};

export default Home;
