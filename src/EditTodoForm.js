import React, { useContext }  from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {TodosContext} from "./context/todos.context"

export default function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.task);
  const {editTodo} = useContext(TodosContext)
  return (
    <form
    style={{marginLeft: "1rem", width: "50%"}}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(props.id,value);
        reset();
        props.toggle();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
