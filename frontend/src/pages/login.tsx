import { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Script from "next/script";
import { isBrowser } from "styles/utils/isBrowser";

import kakaoLogin, { init } from "../utils/kakaoLogin";

const LoginButton: NextPage = () => {
  const [isloaded, setIsloaded] = useState(false);

  if (isBrowser()) {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(mapScript);
  }

  useEffect(() => {
    if (!isloaded) {
      return;
    }

    init();
  }, [isloaded]);

  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={() => {
          setIsloaded(true);
        }}
      />
      <a onClick={kakaoLogin}>
        <Image
          alt="kakao login button"
          src="/kakao_login_medium_narrow.png"
          layout="intrinsic"
          width={150}
          height={50}
        />
      </a>
    </>
  );
};

export default LoginButton;
