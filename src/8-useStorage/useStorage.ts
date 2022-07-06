import { useCallback, useEffect, useState } from "react";

type DefaultValue<T> = T | (() => T);

export const useSessionStorage = <T>(
  key: string,
  defaultValue: DefaultValue<T>
) => {
  return useStorage<T>(key, defaultValue, window.sessionStorage);
};

export const useLocalStorage = <T>(
  key: string,
  defaultValue: DefaultValue<T>
) => {
  return useStorage<T>(key, defaultValue, window.localStorage);
};

const useStorage = <T>(
  key: string,
  defaultValue: DefaultValue<T>,
  storageObject: Storage
) => {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue);

    return typeof defaultValue === "function"
      ? (defaultValue as () => T)()
      : defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove] as [
    typeof value,
    typeof setValue,
    typeof remove
  ];
};
