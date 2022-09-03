import { useEffect, useState } from "react";

const useFetch = <T>(
  firebaseApi => Promise<any>,
  collection: string,
  deps?: any
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    setLoading(true);
    firebaseApi(collection)
      .then((data) => setData(data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [firebaseApi, collection, deps]);

  return { data, loading, error };
};

export default useFetch;

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getItemWithExpireTime } from "./local-storage";

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const token = getItemWithExpireTime("tokenWithExpire");
  if (config.headers) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const customAxios: AxiosInstance = axios.create({
  baseURL: "https://dev.knewnnew.com/",
});

customAxios.interceptors.request.use(refresh, () => {});

export default customAxios;
