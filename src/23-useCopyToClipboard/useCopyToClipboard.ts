import { useState } from "react";

export const useCopyToClipboard = () => {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);

  const copyToClipboard = (text: string | undefined) => {
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setSuccess(true);
          setValue(text);
        })
        .catch(() => setSuccess(false));
    } else {
      setSuccess(false);
    }
  };

  return [copyToClipboard, { value, success }] as [
    typeof copyToClipboard,
    { value: string; success: boolean }
  ];
};
