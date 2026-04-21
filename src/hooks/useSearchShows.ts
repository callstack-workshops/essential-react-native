import { useCallback, useState } from "react";
import { Show } from "../types";
export const useSearchShows = (data: Show[]) => {
  const [value, setValue] = useState("");

  const onSearchChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const shows = data.filter(
    (s) => s.name.toLowerCase().search(value.toLowerCase()) !== -1,
  );

  return { shows, onSearchChange, value };
};
