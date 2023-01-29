import { useState } from "react";
import { useRef } from "react";
const todoList = [
  { id: 1, text: "components", done: false },
  { id: 2, text: "State", done: false },
  { id: 3, text: "Array Rendering", done: false },
];

// let result=[
//     <li>component</li>,

//     <li>State</li>,

//     <li>Array Rendering</li>,
// ];

let result = todoList.map((todo) => <li>{todo.text}</li>);

function TodoList() {
  const [todos, setTodos] = useState(todoList);
  const [input, setInput] = useState("");

  const nextId = useRef(4); //렌더링과 별개로 기억되는 변수
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
    // input 상태값+업데이트 함수 만들기
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    // console.log(input);

    //기존의 todos 배열을 새로운 배열에 복사하고 마지막에 새로운 요소 추가
    //=> 기존 배열과 다른 새로운 배열을 만들어서 불변성 유지
    //setTodos([...todos,{id:4,text:input,done:false}]);

    // alternativel as above,
    setTodos(todos.concat({ id: nextId.current++, text: input, done: false })); //불변성 유지가 중요
    setInput("");
    inputRef.current.focus();
  };

  const handleRemove = (id) => {
    if (window.confirm("Remove?"))
      //선택한 id 가 아닌 요소들만 모으기:filter=>filter도 새로운 배열 반환, 기존배열을 안건들인다.
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />

        <button>등록</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
