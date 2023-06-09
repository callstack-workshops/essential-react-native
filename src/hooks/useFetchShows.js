import { useEffect, useState } from "react";

const API = 'https://training-tv-shows.fly.dev';

export const useFetchShows = (path) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let _isMounted = true;
    const fetchShows = async () => {
      let data = null;

      try {
        data = await fetch(`${API}/${path}`);
      } catch (e) {
        alert(
          "Something Went Wrong!"
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
