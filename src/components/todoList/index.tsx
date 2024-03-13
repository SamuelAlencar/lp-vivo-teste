import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((store) => {
    return store.todo;
  });
  
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
