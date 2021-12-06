import React, { useContext, memo } from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import { DispatchContext } from "./context/todos.context";

const styles = {};
function Todo(props) {
  const [isEditing, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  console.log("rerender" + props.task )
  return (
    <div>
      <ListItem style={{ height: "64px" }}>
        {isEditing ? (
          <EditTodoForm id={props.id} task={props.task} toggle={toggle} />
        ) : (
          <>
            <Checkbox
              onClick={() => dispatch({ type: "TOGGLE", id: props.id })}
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
                onClick={() => dispatch({ type: "REMOVE", id: props.id })}
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
export default memo(withStyles(styles)(Todo));
