import { useEffect, useRef } from "react";

export const useRenderCount = () => {
  const count = useRef<number>(1);
  useEffect(() => {
    count.current++;
  });

  return count.current;
};
