import axios from "axios";
import { use } from "react";

interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

const fetch = (async () =>
  (await axios.get("https://jsonplaceholder.typicode.com/todos")).data)();

const TodoList = () => {
  const todoList = use<Array<ITodo>>(fetch);

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
