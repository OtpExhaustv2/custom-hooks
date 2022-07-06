import { useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

interface ClickOutsideComponentProps {}

const ClickOutsideComponent: React.FC<ClickOutsideComponentProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, (e) => {
    if (open) setOpen(false);
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
};

export default ClickOutsideComponent;
