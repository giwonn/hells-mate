import type { NextPage } from "next";

declare global {
  interface Window {
    Kakao: any;
  }
}
const Home: NextPage = () => {
  return (
    <>
      <div>Hello World</div>
    </>
  );
};

export default Home;
