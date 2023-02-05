import React, { useContext, useState, useRef } from "react";
//import { TodoDispatchContext } from "./Todos";
import { useTodoDispatch } from "../context/todos";

function TodoCreate({ onSubmit }) {
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();

  const nextId = useRef(4);

  const handleText = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit(text);
    dispatch({ type: "create", id: nextId.current++, text });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} text={text} />
        <button> 등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoCreate);
