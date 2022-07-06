import { useState } from "react";

export const useArray = <T>(defaultValue: T[]) => {
  const [array, setArray] = useState(defaultValue);

  const push = (value: T) => {
    setArray((a) => [...a, value]);
  };

  const filter = (fn: (value: T) => boolean) => {
    setArray((a) => a.filter(fn));
  };

  const update = (index: number, value: T) => {
    setArray((a) => [...a.slice(0, index), value, ...a.slice(index + 1)]);
  };

  const remove = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
};
