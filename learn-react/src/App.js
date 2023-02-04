import { useState } from "react";
import "./App.css";
// import InputText from "./components/InputText";
// import TodoList from "./components/TodoList";
import Effect from "./todos/Effect";
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* <TodoList /> */}
      <Effect />

      <button onClick={() => setShow(!show)}>
        {show ? "언마운트" : "마운트"}
      </button>
      {/* 조건부 렌터딜 */}
      {show && <Effect />}
    </>
  );
}

export default App;
