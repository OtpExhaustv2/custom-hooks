import { useLocalStorage, useSessionStorage } from "./useStorage";

interface StorageComponentProps {}

const StorageComponent: React.FC<StorageComponentProps> = ({}) => {
  const [name, setName, removeName] = useSessionStorage("name", "Sébastien");
  const [age, setAge, removeAge] = useLocalStorage("age", "30");

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};

export default StorageComponent;
