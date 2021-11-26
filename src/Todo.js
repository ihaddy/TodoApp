import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import {Delete, Edit} from "@material-ui/icons"
import { IconButton } from '@material-ui/core'
import { ListItemSecondaryAction } from '@material-ui/core'


export default function Todo(props) {
    return (
        <div>
            <ListItem>
                <Checkbox tabIndex={-1} checked={props.completed}/>
              <ListItemText style={{textDecoration: props.completed ? "line-through" : "none"}}>
                {props.task}
              </ListItemText>
              <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                      <Delete />
                  </IconButton>
                  <IconButton aria-label="Edit">
                     <Edit/>
                  </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}
