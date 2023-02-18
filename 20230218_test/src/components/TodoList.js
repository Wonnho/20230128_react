import { useRef, useState } from "react";
import styled from "styled-components";
//import TodoItem from "./TodoItem";
import "../scss/TodoList.scss";
const data = [
  {
    id: 1,
    content: "청소",
    YesNo: false,
  },
  {
    id: 2,
    content: "요리",
    YesNo: false,
  },
  {
    id: 3,
    content: "체조",
    YesNo: false,
  },
];

const TodoList = () => {
  // const date1 = new Date();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(data);

  // const styles = styled.div``;
  const inputRef = useRef();

  const doInput = (e) => {
    setInput(e.target.value);
  };

  const nextId = useRef(4);

  const doSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    setTodos([
      ...todos,
      { id: nextId.current++, content: input, YesNo: false },
    ]);
  };

  const doToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, YesNo: !todo.YesNo } : todo
      )
    );
  };

  const doRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* <div> Date: {date1}</div>    */}
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.YesNo && "line-through" }}
            onClick={() => doToggle(todo.id)}
          >
            <span> {todo.content} </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                doRemove(todo.id);
              }}
            >
              제거
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <form onSubmit={doSubmit}>
        <input type="text" onChange={doInput} value={input} ref={inputRef} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default TodoList;
