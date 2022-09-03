import { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";

import kakaoLogin from "../../pages/api/kakaoLogin";

const LoginButton: NextPage = () => {
  return (
    <>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" />
      <a onClick={kakaoLogin}>누르면 로그인 요청함</a>
      <Image
        alt="kakao login button"
        src="/kakao_login_medium_narrow.png"
        layout="intrinsic"
        width={150}
        height={50}
      />
    </>
  );
};

export default LoginButton;
