import React, {useState, useContext} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
// import { arrayMove } from "react-sortable-hoc";
import {arrayMoveImmutable} from "array-move";
import { TodosProvider } from "./context/todos.context";
import {TodosContext} from "./context/todos.context"
import uuid from "react-uuid";

export default function TodoApp() {
const { todos, settodo } = useContext(TodosContext)
// const  todos  = useContext(TodosContext)
console.log(todos)


// const onSortEnd = ({ oldIndex, newIndex }) => {
//   settodo( arrayMoveImmutable(todos, oldIndex, newIndex));}
//   console.log(todos)
  
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
            <TodoList distance={3} axis="y" onSortEnd={({ oldIndex, newIndex }) => {settodo(arrayMoveImmutable(todos, oldIndex, newIndex))}}></TodoList> 
          
        </Grid>
      </Grid>
    </Paper>
  );
}
