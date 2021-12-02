import React from "react";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={props.removeTodo}
              id={todo.id}
              editTodo={props.editTodo}
              toggleTodo={props.toggleTodo}
            />

            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
