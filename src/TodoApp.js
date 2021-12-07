import React, { useState, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { arrayMoveImmutable } from "array-move";
import { TodosContext, DispatchContext } from "./context/todos.context";

export default function TodoApp() {
  const { todos } = useContext(TodosContext);
  const dispatch = useContext(DispatchContext);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatch({
      type: "DRAGANDDROP",
      rearrangedState: arrayMoveImmutable(todos, oldIndex, newIndex),
    });
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit"> TODO</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm />
          <TodoList distance={5} onSortEnd={onSortEnd} axis="y"></TodoList>
        </Grid>
      </Grid>
    </Paper>
  );
}
