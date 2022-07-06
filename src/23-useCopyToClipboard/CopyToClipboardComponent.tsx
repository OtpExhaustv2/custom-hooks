import { useRef, useState } from "react";
import { useCopyToClipboard } from "./useCopyToClipboard";

interface CopyToClipboardComponentProps {}

const CopyToClipboardComponent: React.FC<
  CopyToClipboardComponentProps
> = ({}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState("");
  const [copy, { value, success }] = useCopyToClipboard();

  return (
    <div>
      <button onClick={() => copy(inputRef.current?.value)}>
        {success ? "copied" : "copy text"}
      </button>
      <input
        type="text"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};

export default CopyToClipboardComponent;
