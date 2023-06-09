import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = 'https://training-tv-shows.fly.dev';

export const useFetchShows = (path, storageKey) => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let _isMounted = true;
    const fetchShows = async () => {
      const storedData = await AsyncStorage.getItem(storageKey);
      if (storedData) {
        setShows(JSON.parse(storedData));
        return;
      }

      setIsLoading(true);

      let data = null;

      try {
        data = await fetch(`${API}/${path}`);
      } catch (e) {
        alert(
          "Something went wrong!"
        );
        return;
      }

      const shows = await data.json();
      await AsyncStorage.setItem(storageKey, JSON.stringify(shows));
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
  }, [path, storageKey]);

  return { shows: shows.sort((a, b) => (a.name > b.name ? 1 : -1)), isLoading };
};
