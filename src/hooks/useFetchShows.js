import { useEffect, useState, useCallback } from "react";

const API = "https://training-tv-shows.fly.dev";

export const useFetchShows = (path) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShows = useCallback(
    async (controller) => {
      const { signal } = controller;

      try {
        const res = await fetch(`${API}/${path}`, { signal });
        const shows = await res.json();
        setShows(shows);
        setIsLoading(false);
      } catch (e) {
        alert("Something Went wrong");
        return;
      }
    },
    [path]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchShows(controller);

    return () => {
      controller.abort();
    };
  }, [fetchShows]);

  return { shows: shows.sort((a, b) => (a.name > b.name ? 1 : -1)), isLoading };
};
