
import uuid from "react-uuid";
import UseLocalStorageState from "./UseLocalStorageState";

export default initialTodos => {
    const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);
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
          },
        settodo:  (newTodoText) => {
            setTodos(newTodoText);
          },
        
        
    }
}
