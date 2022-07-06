import React, { useEffect } from "react";
import { useMediaQuery } from "../16-useMediaquery/useMediaQuery";
import { useLocalStorage } from "../8-useStorage/useStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode] as [typeof enabled, typeof setDarkMode];
};
