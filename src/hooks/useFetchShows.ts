import { useEffect, useState, useCallback } from "react";
import { Show } from "../types";

const API = "https://training-tv-shows.fly.dev";

export const useFetchShows = (path: string) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShows = useCallback(
    async (controller: AbortController) => {
      const { signal } = controller;

      try {
        const res = await fetch(`${API}/${path}`, { signal });
        const shows = await res.json();
        setShows(shows);
        setIsLoading(false);
      } catch (_error) {
        alert("Something Went wrong");
        return;
      }
    },
    [path],
  );

  useEffect(() => {
    const controller = new AbortController();
    void fetchShows(controller);

    return () => {
      controller.abort();
    };
  }, [fetchShows]);

  return { shows: shows.sort((a, b) => (a.name > b.name ? 1 : -1)), isLoading };
};
