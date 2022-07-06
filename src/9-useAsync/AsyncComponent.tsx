import { useState } from "react";
import { useAsync } from "./useAsync";

interface AsyncComponentProps {}

const AsyncComponent: React.FC<AsyncComponentProps> = ({}) => {
  const [count, setCount] = useState(0);
  const { loading, error, value } = useAsync<string>(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        count % 2 === 0 ? resolve("Hi") : reject("Error");
      }, 1000);
    });
  }, [count]);

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)} disabled={loading}>
        Increment
      </button>
    </div>
  );
};

export default AsyncComponent;
