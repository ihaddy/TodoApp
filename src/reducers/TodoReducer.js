import uuid from "react-uuid";
import { arrayMove } from "react-sortable-hoc";
const reducer = (state, action) => {
    switch(action.type){
        case "ADD": 
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE":
            return state.map((todo) =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            );
        case "DRAGANDDROP":
            return  action.rearrangedState
            
        default:
            return state
        }
}

export default reducer