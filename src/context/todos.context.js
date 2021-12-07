import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
import uuid from "react-uuid";

const initialTodos = [
  { id: uuid(), task: "sell home", completed: false },
  { id: uuid(), task: "become hermit", completed: true },
  { id: uuid(), task: "code in react", completed: true },
];

export const TodosContext = createContext(initialTodos);

export function TodosProvider(props) {
  const { todos, addTodo, removeTodo, editTodo, toggleTodo, settodo  } =
    useTodoState(initialTodos);
  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, editTodo, toggleTodo, settodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
