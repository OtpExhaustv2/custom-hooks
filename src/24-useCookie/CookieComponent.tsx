import { useCookie } from "./useCookie";

interface CookieComponentProps {}

const CookieComponent: React.FC<CookieComponentProps> = ({}) => {
  const [value, update, remove] = useCookie("name", "Séb");
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => update("Sally")}>Change name to sally</button>
      <button onClick={remove}>Delete Name</button>
    </div>
  );
};

export default CookieComponent;
