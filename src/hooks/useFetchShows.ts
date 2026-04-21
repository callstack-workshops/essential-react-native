import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Show } from "../types";

const API = "https://training-tv-shows.fly.dev";

export const useFetchShows = (path: string, storageKey: string) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchShows = useCallback(
    async (controller: AbortController) => {
      const { signal } = controller;

      const storedData = await AsyncStorage.getItem(storageKey);
      if (storedData) {
        setShows(JSON.parse(storedData));
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API}/${path}`, { signal });
        const shows = await res.json();
        await AsyncStorage.setItem(storageKey, JSON.stringify(shows));
        setShows(shows);
        setIsLoading(false);
      } catch (_error) {
        alert("Something Went wrong");
        return;
      }
    },
    [path, storageKey],
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
