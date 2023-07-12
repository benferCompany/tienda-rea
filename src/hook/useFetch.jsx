import { useState } from "react";
import { useQuery } from "react-query";

const useFetch = (API_URL) => {

  const [error, setError] = useState(false);

  const { data, isError, isLoading: loading, isSuccess } = useQuery('products', async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();

      if (json.error == "Not Found") {
        setError(true);
      }
      return json;

    } catch (e) {
      setError(true);      
    }
  })

  return { data, error, loading, isSuccess }
}

export default useFetch;