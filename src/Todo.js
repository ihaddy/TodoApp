import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

const styles = {};
function Todo(props) {
  const [isEditing, toggle] = useToggle(false);

  return (
    <div>
      <ListItem>
        {isEditing ? (
          <EditTodoForm editTodo={props.editTodo} id={props.id} task={props.task} toggle={toggle}/>
        ) : (
          <>
            <Checkbox
              onClick={() => props.toggleTodo(props.id)}
              tabIndex={-1}
              checked={props.completed}
            />
            <ListItemText
              style={{
                textDecoration: props.completed ? "line-through" : "none",
              }}
            >
              {props.task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => props.removeTodo(props.id)}
                aria-label="Delete"
              >
                <Delete />
              </IconButton>
              <IconButton aria-label="Edit" onClick={toggle}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </div>
  );
}
export default withStyles(styles)(Todo);
