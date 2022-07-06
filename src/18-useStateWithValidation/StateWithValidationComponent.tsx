import { useStateWithValdiation } from "./useStateWithValidation";

interface StateWithValidationComponentProps {}

const StateWithValidationComponent: React.FC<
  StateWithValidationComponentProps
> = ({}) => {
  const [username, setUsername, isValid] = useStateWithValdiation(
    (name) => name.startsWith("s"),
    ""
  );

  return (
    <div>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default StateWithValidationComponent;
