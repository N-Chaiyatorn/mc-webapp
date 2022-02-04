import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (initUrl: string) => {
  const [data, setData] = useState([]);
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
