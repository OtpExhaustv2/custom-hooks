import React, { useEffect, useState } from "react";

export const useSize = <T>(ref: React.MutableRefObject<T>) => {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current === null) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect)
    );
    observer.observe(ref.current as Element);

    return () => observer.disconnect();
  }, []);

  return size;
};
