import { useCallback, useState } from "react";

export const useStateWithValdiation = <T>(
  validationFunc: (value: T) => boolean,
  defaultValue: T
) => {
  const [state, setState] = useState<T>(defaultValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: typeof state) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc]
  );

  return [state, onChange, isValid] as [typeof state, typeof onChange, boolean];
};
