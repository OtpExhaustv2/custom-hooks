import { divide } from "lodash";
import { useState } from "react";
import { useEventListener } from "./useEventListener";

interface EventListenerComponentProps {}

const EventListenerComponent: React.FC<EventListenerComponentProps> = ({}) => {
  const [key, setKey] = useState("");

  useEventListener("keypress", (e) => {
    setKey(e.key);
  });

  return <div>Last key: {key}</div>;
};

export default EventListenerComponent;
