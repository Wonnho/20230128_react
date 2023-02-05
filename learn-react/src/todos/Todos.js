import {
  useRef,
  useEffect,
  useReducer,
  useCallback,
  createContext,
} from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

const initialState = [
  { id: 1, text: "useEffect", done: true },
  { id: 2, text: "useReducer", done: false },
  { id: 3, text: "useCallback, useMemo", done: false },
];

export const TodoStateContext = createContext(null);
export const TododispatchContext = createContext(null);

function Todos() {
  //useReducer(리듀서함수,초기값)=>상태값,디스패치 함수 반환
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoStateContext.Provider value={todos}>
      <TododispatchContext.Provider value={dispatch}>
        <div>
          <TodoCreate />
          <TodoList />
        </div>
      </TododispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default Todos;
