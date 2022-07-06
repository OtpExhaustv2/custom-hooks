import { useWindowSize } from "./useWindowSize";

interface WindowSizeComponentProps {}

const WindowSizeComponent: React.FC<WindowSizeComponentProps> = ({}) => {
  const { width, height } = useWindowSize();
  return (
    <div>
      {width} x {height}
    </div>
  );
};

export default WindowSizeComponent;
