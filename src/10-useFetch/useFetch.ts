import React from "react";
import { useAsync } from "../9-useAsync/useAsync";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export const useFetch = <T>(
  url: string,
  options = {},
  dependencies: React.DependencyList = []
) => {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      if (res.ok) return res.json() as T;
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
};
