import { useEffect } from "react";
import { useState } from "react";

// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const getJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const result = await response.json();

      setData(result);

    } catch (error) {
      setError(error.message)
    }
    finally {
      setLoading(false)
    }
  };

  //It should return data returned from fetch, loading, error and getJoke
  useEffect(() => {
    getJoke();
  }, [url]);

  return { data, loading, error, getJoke }
};
// export the useFetch hook as a default export

export default useFetch;
