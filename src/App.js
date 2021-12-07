
import { TodosProvider } from "./context/todos.context";
import TodoApp from './TodoApp';

function App() {
  return (
    <TodosProvider>
    <TodoApp />
    </TodosProvider>
  );
}

export default App;
