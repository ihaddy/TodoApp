import React, { createContext } from "react";
import todoReducer from "../reducers/TodoReducer";
import UseLocalStorageStateReducer from "../reducers/UseLocalStorageStateReducer";
import uuid from "react-uuid";

const initialTodos = [
  { id: uuid(), task: "sell home", completed: false },
  { id: uuid(), task: "become hermit", completed: true },
  { id: uuid(), task: "code in react", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = UseLocalStorageStateReducer("todos", initialTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
