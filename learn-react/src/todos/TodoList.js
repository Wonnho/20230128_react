import React, { useContext, useMemo } from "react";
//import { CountContext } from "../App";

import { useTodoState, useTodoDispatch } from "../context/todos";

function countUndoneTodo(todos) {
  console.log("안할 일 세는 중...");
  return todos.filter((todo) => !todo.done).length;
}

function TodoList() {
  //의존성 배열에 있는 값이 변했을 때에만 다시 연산을 한다.

  const todos = useTodoState();

  const undoneTodo = useMemo(() => {
    return countUndoneTodo(todos);
  }, [todos]);

  console.log(undoneTodo);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            // onRemove={onRemove}
            // onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();

  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => dispatch({ type: "toggle", id: todo.id })}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
        삭제{" "}
      </button>
    </li>
  );
}

//React.memo 컴포넌트가 받는 props가 변경되었을 때만 렌더링이 발생
export default React.memo(TodoList);
