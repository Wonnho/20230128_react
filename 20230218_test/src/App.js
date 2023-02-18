import "./App.css";
import MakeTodo from "./components/MakeTodo";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoList />
        <MakeTodo />
      </TodoTemplate>
    </div>
  );
}

export default App;
