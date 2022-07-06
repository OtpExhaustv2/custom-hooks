import { useState } from "react";
import { useEffectOnce } from "./useEffectOnce";

interface EffectOnceComponentProps {}

const EffectOnceComponent: React.FC<EffectOnceComponentProps> = ({}) => {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert("hi"));

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default EffectOnceComponent;
