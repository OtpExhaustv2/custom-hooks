import { useState } from "react";
import { useEventListener } from "../13-useEventListener/useEventListener";

export const useWindowSize = () => {
  const [windowSize, setwindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setwindowsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
};
