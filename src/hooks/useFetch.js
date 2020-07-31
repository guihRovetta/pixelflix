import { useState, useEffect } from 'react';
import { URL_SERVER } from '../config';

function useFetch(path) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const url = `${URL_SERVER}${path}`;
        const res = await fetch(url);
        const json = await res.json();

        setLoading(false);
        setResponse(json);
      } catch (err) {
        setError(err);
      }
    })();
  }, [path]);

  return [response, loading, error];
}

export default useFetch;
