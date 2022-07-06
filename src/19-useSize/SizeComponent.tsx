import { useRef } from "react";
import { useSize } from "./useSize";

interface SizeComponentProps {}

const SizeComponent: React.FC<SizeComponentProps> = ({}) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const size = useSize(ref);

  return (
    <div>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </div>
  );
};

export default SizeComponent;
