import React, { useEffect, useState } from "react";

export const useOnScreen = <T>(
  ref: React.MutableRefObject<T>,
  rootMargin: string = "0px",
  callback?: (isVisible: boolean, ref: React.MutableRefObject<T>) => void
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (callback && ref.current !== null)
          callback(entry.isIntersecting, ref);
      },
      { rootMargin }
    );
    observer.observe(ref.current as Element);

    return () => {
      if (ref.current === null) return;
      observer.unobserve(ref.current as Element);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
};
