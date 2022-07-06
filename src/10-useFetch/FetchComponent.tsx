import { useState } from "react";
import { useFetch } from "./useFetch";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface FetchComponentProps {}

const FetchComponent: React.FC<FetchComponentProps> = ({}) => {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((i) => i + 1)}>Increment ID</button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
      <div>{value?.title}</div>
    </div>
  );
};

export default FetchComponent;
