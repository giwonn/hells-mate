import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";

const Redirect: NextPage = () => {
  const { isReady, query } = useRouter();

  useEffect(() => {
    if (!isReady) {
      return;
    }
    const client = axios.create({
      baseURL: "http://192.168.201.67:8000",
    });

    client
      .get("/user/kakao/callback", {
        params: {
          code: query.code,
        },
      })
      .then((response) => {
        client.get("/user/login", {
          headers: {
            Authorization: `Bearer ${response.data.data.accessToken}`,
          },
        });
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [isReady, query.code]);

  return <></>;
};

export default Redirect;
