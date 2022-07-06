import { useState } from "react";

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = (value?: boolean) =>
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );

  return [value, toggle] as [typeof value, typeof toggle];
};
