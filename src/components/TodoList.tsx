import React from "react";
import Todo from "./Todo";

type TodoModel = {
  id: number;
  message: string;
};

const TodoList: React.FC = () => {
  const todos: TodoModel[] = [
    {
      id: 1,
      message: "Salut",
    },
    {
      id: 2,
      message: "Coucou",
    },
  ];

  return (
    <div className="container">
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} message={todo.message} />
      ))}
    </div>
  );
};

export default TodoList;
