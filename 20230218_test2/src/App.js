import logo from './logo.svg';
import './App.css';
import { TodoProvider } from './context/todos';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        
      </TodoProvider>
    </div>
  );
}

export default App;
