import { useCallback, useState } from "react";
import Cookies from "js-cookie";

export const useCookie = (name: string, defaultValue: string) => {
  const [value, setValue] = useState<string | null>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes | undefined) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie] as [
    typeof value,
    typeof updateCookie,
    typeof deleteCookie
  ];
};