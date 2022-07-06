import { useState } from "react";
import { useToggle } from "../1-useToggle/useToggle";
import { useDebugInformation } from "./useDebugInformation";

interface DebugInformationComponentProps {}

const DebugInformationComponent: React.FC<
  DebugInformationComponentProps
> = ({}) => {
  const [boolean, toggle] = useToggle(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildComponent boolean={boolean} count={count} />
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default DebugInformationComponent;

const ChildComponent: React.FC<{ boolean: boolean; count: number }> = (
  props
) => {
  const info = useDebugInformation("ChildComponent", props);

  return (
    <>
      <div>{props.boolean.toString()}</div>
      <div>{props.count}</div>
      <div>{JSON.stringify(info, null, 2)}</div>
    </>
  );
};
