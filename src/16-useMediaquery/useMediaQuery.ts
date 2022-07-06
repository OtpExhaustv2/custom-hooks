import { useEffect, useState } from "react";
import { useEventListener } from "../13-useEventListener/useEventListener";

export const useMediaQuery = (mediaQuery: string) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener(
    "resize",
    (e) => {
      const matching = window.matchMedia(mediaQuery).matches;
      setIsMatch(matching);
    },
    window
  );

  return isMatch;
};
