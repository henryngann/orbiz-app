import { useEffect, useState } from "react";

//Added a quick helper hook so the search isn't too sensitive
//I would pair this with a nice enter/exit animation on the cards
//but time constraints and the nature of the assignment prevent that.
const useDebouncedValue = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebouncedValue;
