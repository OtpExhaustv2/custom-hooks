import { useDarkMode } from "./useDarkMode";

interface DarkModeComponentProps {}

const DarkModeComponent: React.FC<DarkModeComponentProps> = ({}) => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          border: `1px solid ${darkMode ? "white" : "black"}`,
          background: "none",
          color: darkMode ? "white" : "black",
        }}
      >
        toggle dark mode
      </button>
    </div>
  );
};

export default DarkModeComponent;
