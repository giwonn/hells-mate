import { useEffect, useState } from "react";
import axios from "axios";

export function useAxiosData(url: string) {
  const client = axios.create({
    baseURL: "http://192.168.201.60:8001",
  });

  const [apiGroupData, setApiGroupData] = useState(null);
  useEffect(() => {
    client
      .get(url, {})
      .then((response) => {
        console.log("query sent", response.data);
        setTimeout(() => {
          setApiGroupData(response.data);
        }, 1000);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, []);

  return apiGroupData;
}
