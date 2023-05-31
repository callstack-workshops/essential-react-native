import { useEffect, useState } from "react";

export const useFetchShows = (path) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let _isMounted = true;
    const fetchShows = async () => {
      let data = null;

      try {
        // Change to your localhost ip address (needed on Android) instead of just using "localhost"
        data = await fetch(`http://192.168.1.103:8080/${path}`);
      } catch (e) {
        alert(
          "Remember to start the server with CORS allowing 'http://localhost:8000'."
        );
        return;
      }

      const shows = await data.json();
      await setTimeout(async () => {
        if (_isMounted) {
          setShows(shows);
          setIsLoading(false);
        }
      }, 350);
    };

    fetchShows();

    return () => {
      _isMounted = false;
    };
  }, [path]);

  return { shows: shows.sort((a, b) => (a.name > b.name ? 1 : -1)), isLoading };
};
