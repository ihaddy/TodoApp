import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";
import { SortableContainer } from "react-sortable-hoc";

const TodoList = SortableContainer(() => {
  const {todos}  = useContext(TodosContext);
  console.log(todos)

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                index={i}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                id={todo.id}
              />

              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
});
export default TodoList;
