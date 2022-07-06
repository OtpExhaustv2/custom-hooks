import { useState } from "react";
import { useStateWithHistory } from "./useStateWithHistory";

interface StateWithHistoryComponentProps {}

const StateWithHistoryComponent: React.FC<
  StateWithHistoryComponentProps
> = ({}) => {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState("Sébastien");

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <button onClick={() => setCount((c) => c * 2)}>Double</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={back}>Go back</button>
      <button onClick={() => go(2)}>Go to 2</button>
      <button onClick={forward}>Go forward</button>
      <button onClick={() => setName("John")}>Change name</button>
    </div>
  );
};

export default StateWithHistoryComponent;
