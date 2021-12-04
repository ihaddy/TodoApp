import { useState } from "react";
import uuid from "react-uuid";

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: (newTodoText) => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
          },
        removeTodo: (todoId) => {
            const updatedTodo = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatedTodo);
          },
        toggleTodo: (todoId) => {
            const updatedTodo = todos.map((todo) =>
              todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
            setTodos(updatedTodo)

        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo =>
              todo.id === todoId ? { ...todo, task: newTask } : todo
            );
            setTodos(updatedTodos);
          }
        
    }
}
