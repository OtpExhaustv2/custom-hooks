import { useEffect, useRef } from "react";

export const useEventListener = <K extends keyof DocumentEventMap>(
  key: K | string,
  callback: (e: DocumentEventMap[K]) => void,
  element: any = window
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element === null) return;
    const handler = (e: DocumentEventMap[K]) => callbackRef.current(e);
    element.addEventListener(key, handler);

    return () => element.removeEventListener(key, handler);
  }, [key, element]);
};
