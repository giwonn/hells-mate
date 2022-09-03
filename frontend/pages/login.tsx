import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login: NextPage = () => {
  const { query, isReady } = useRouter();
  const getToken = async (code: string) => {
    const res = await axios.get(`http://localhost:8000/auth/kakao/callback`, {
      params: { code },
      maxRedirects: 0,
    });
    console.log(res);
    return res;
  };

  useEffect(() => {
    if (!isReady) {
      return;
    }

    getToken(query.code.toString());
  }, [isReady]);

  return (
    <>
      <p>로그인중입니다...</p>
    </>
  );
};

export default Login;
