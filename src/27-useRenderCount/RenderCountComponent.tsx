import { useToggle } from "../1-useToggle/useToggle";
import { useRenderCount } from "./useRenderCount";

interface RenderCountComponentProps {}

const RenderCountComponent: React.FC<RenderCountComponentProps> = ({}) => {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <div>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
};

export default RenderCountComponent;
