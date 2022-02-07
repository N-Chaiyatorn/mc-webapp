import axios from "axios";
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface Response<objType> {
  data?: objType;
  isLoading: boolean;
  isError: boolean;
  setUrl: Dispatch<SetStateAction<string>>;
}

const useFetch = <objType>(initUrl: string): Response<objType> => {
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(initUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError, setUrl };
};

export default useFetch;
