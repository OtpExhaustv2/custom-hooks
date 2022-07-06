import React, { useEffect } from "react";
import { useEventListener } from "../13-useEventListener/useEventListener";

export const useClickOutside = (
  ref: React.MutableRefObject<any>,
  cb: (e: MouseEvent | TouchEvent) => void
) => {

  useEventListener("mousedown", (e) => {
    if (!ref.current || ref.current.contains(e.target)) return;
    cb(e);
  })

  // useEffect(() => {
  //   const listener = (event: MouseEvent | TouchEvent) => {
  //     if (!ref.current || ref.current.contains(event.target)) return;
  //     cb(event);
  //   };

  //   document.addEventListener("mousedown", listener);
  //   document.addEventListener("touchstart", listener);

  //   return () => {
  //     document.removeEventListener("mousedown", listener);
  //     document.removeEventListener("touchstart", listener);
  //   };
  // }, [ref, cb]);
};
