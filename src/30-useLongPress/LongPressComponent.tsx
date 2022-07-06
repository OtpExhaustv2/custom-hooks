import { useRef } from "react";
import { useLongPress } from "./useLongPress";

interface LongPressComponentProps {}

const LongPressComponent: React.FC<LongPressComponentProps> = ({}) => {
  const elementRef = useRef<HTMLDivElement | null>();
  useLongPress(elementRef, () => alert("Long press"), { delay: 1000 });

  return (
    <div
      ref={(el) => (elementRef.current = el)}
      style={{
        backgroundColor: "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    />
  );
};

export default LongPressComponent;
