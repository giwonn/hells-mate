import { NextPage } from "next";
import kakaoLogin from "./api/kakaoLogin";
import Image from "next/image";

const LoginButton: NextPage = () => {
  return (
    <>
      <a onClick={kakaoLogin}>누르면 로그인 요청함</a>
      <Image
        src="/kakao_login_medium_narrow.png"
        layout="intrinsic"
        width={150}
        height={50}
      />
    </>
  );
};

export default LoginButton;
