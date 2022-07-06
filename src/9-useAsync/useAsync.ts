import React, { useCallback, useEffect, useState } from "react";

export const useAsync = <T>(
  promise: () => Promise<T>,
  dependencies?: React.DependencyList
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<T | null>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(null);
    setValue(null);
    promise()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies ?? []);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};
