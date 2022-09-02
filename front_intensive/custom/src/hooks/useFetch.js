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
