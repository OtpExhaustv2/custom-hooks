import React, { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

export const useDeepCompareEffect = (
  callback: () => void,
  dependencies: React.DependencyList
) => {
  const currentDependenciesRef = useRef<React.DependencyList | null>(null);
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
};
