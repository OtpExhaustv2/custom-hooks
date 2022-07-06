import { useOnlineStatus } from "./useOnlineStatus";

interface OnlineStatusComponentProps {}

const OnlineStatusComponent: React.FC<OnlineStatusComponentProps> = ({}) => {
  const online = useOnlineStatus();
  return <div>{online.toString()}</div>;
};

export default OnlineStatusComponent;
