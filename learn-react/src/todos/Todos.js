import { useEffect, useReducer } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return;
    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect", done: true },
  { id: 2, text: "useReducer", done: false },
  { id: 3, text: "useCallback, useMemo", done: false },
];
function Todos() {
  //useReducer(리듀서함수,초기값)=>상태값,디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);

  console.log(todos);

  useEffect(() => {
    dispatch({ test: "test" });
  }, []);

  return (
    <div>
      <TodoCreate dispatch={dispatch} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todos;
