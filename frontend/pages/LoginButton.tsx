import { NextPage } from "next";
import kakaoLogin from "./api/kakaoLogin";

const LoginButton: NextPage = () => {
  return (
    <>
      <a onClick={kakaoLogin}>누르면 로그인 요청함</a>
    </>
  );
};

export default LoginButton;
