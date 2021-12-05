import React, {useContext} from "react";
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {TodosContext} from "./context/todos.context"

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  const {addTodo} = useContext(TodosContext)
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          margin="normal"
          label="Add New Todo"
          fullWidth
          value={value}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}
