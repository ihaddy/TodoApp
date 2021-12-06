import React, {useContext} from "react";
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {DispatchContext} from "./context/todos.context"

export default function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext)
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({type: "ADD", task: value});
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
