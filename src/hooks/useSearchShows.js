import { useCallback, useState } from "react";

export const useSearchShows = (data) => {
  const [value, setValue] = useState("");

  const onSearchChange = useCallback((value) => {
    setValue(value);
  }, []);

  const shows = data.filter(
    (s) => s.name.toLowerCase().search(value.toLowerCase()) !== -1
  );

  return { shows, onSearchChange, value };
};
