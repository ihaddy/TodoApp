import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer"
import uuid from "react-uuid";

const initialTodos = [
  { id: uuid(), task: "sell home", completed: false },
  { id: uuid(), task: "become hermit", completed: true },
  { id: uuid(), task: "code in react", completed: true },
];

export const TodosContext = createContext(initialTodos);

export function TodosProvider(props) {
 const [todos, dispatch] = useReducer(todoReducer, initialTodos)
  return (
    <TodosContext.Provider
      value={{ todos, dispatch }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
