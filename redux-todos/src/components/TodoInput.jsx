import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todos._toolkit";
function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
 
    createTodo();
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoInput;
