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

        if (res.ok) {
          setResponse(json);
        } else {
          setError(json);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [path]);

  return [response, loading, error];
}

export default useFetch;
