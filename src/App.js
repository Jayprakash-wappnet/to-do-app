import "./App.css";
import Todo from "./features/to-do/Todo";
import TodoList from "./features/to-do/TodoList";

function App() {
  return (
    <div className="App">
      <h1>To-do</h1>
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
