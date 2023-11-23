import React from "react";

function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit,
  autoFetch: boolean = true
) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const abortControllerRef = React.useRef<AbortController | null>(null);

  const fetchData = async (
    urlToFetch: RequestInfo | URL,
    optionsToUse?: RequestInit
  ) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(urlToFetch, {
        ...optionsToUse,
        signal: abortControllerRef.current.signal,
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const json = (await response.json()) as T;
      setData(json);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (autoFetch) {
      fetchData(url, options);
    }

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url]);

  return { data, loading, error, fetchData, setData };
}

export default useFetch;
