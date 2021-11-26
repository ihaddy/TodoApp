import React from "react";
import { ListItemText, Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
                <Todo
                  task={todo.task}
                  key={todo.id}
                  completed={todo.completed}
                />
             
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
