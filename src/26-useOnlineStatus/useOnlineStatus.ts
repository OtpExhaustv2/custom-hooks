import { useState } from "react";
import { useEventListener } from "../13-useEventListener/useEventListener";

export const useOnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  document.addEventListener;

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
};
