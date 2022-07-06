import { useState } from "react";
import { usePrevious } from "./usePrevious";

interface PreviousValueComponentProps {}

const PreviousValueComponent: React.FC<PreviousValueComponentProps> = ({}) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Séb");
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName("John")}>Change name</button>
    </div>
  );
};

export default PreviousValueComponent;
