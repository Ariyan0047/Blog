import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(true);

  const abortController = new AbortController();

  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((resource) => {
          if (!resource.ok) throw new Error("Server Not Found");
          return resource.json();
        })
        .then((data) => setBlogs(data), setPending(false))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setPending(false);
            setError(error.message);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { blogs, error, isPending };
};

export default useFetch;
