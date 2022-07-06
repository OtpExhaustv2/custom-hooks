import { useMediaQuery } from "./useMediaQuery";

interface MediaQueryComponentProps {}

const MediaQueryComponent: React.FC<MediaQueryComponentProps> = ({}) => {
  const isLarge = useMediaQuery("(min-width: 600px)");
  return <div>Large: {isLarge.toString()}</div>;
};

export default MediaQueryComponent;
