import React, { useState } from "react";
import { useEventListener } from "../13-useEventListener/useEventListener";

export const useHover = <T>(ref: React.MutableRefObject<T>) => {
  const [hovered, setHovered] = useState(false);

  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
};
