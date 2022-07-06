import React, { useEffect } from "react";
import { useTimeout } from "../2-useTimeout/useTimeout";

export const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: React.DependencyList
) => {
  const { clear, reset } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);

  // clear the timeout when the component mounts
  useEffect(clear, []);
};
