import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

export default function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editTodo(props.id,value);
        reset();
        props.toggle();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
}
