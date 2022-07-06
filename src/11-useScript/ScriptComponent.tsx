import { useScript } from "./useScript";

interface ScriptComponentProps {}

const ScriptComponent: React.FC<ScriptComponentProps> = ({}) => {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{window.$(window).width()}</div>;
};

export default ScriptComponent;
