import React from "react";
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Todo from "./Todo";

export default function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo,i) => (
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

              {i < props.todos.length -1 && <Divider /> }
            </>
          ))}
        </List>
      </Paper>
    );
    return null;
}
