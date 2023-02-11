import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({
    isLoading: true,
    data: null,
    isError: false,
  });
  const fetchData = async () => {
    //await: Promise? resolve가 되기 전까지 다음 코드가 실행되지 않는다.
    const res = await fetch("http://localhost:5000/todos");
    //fetch()는 기본적으로 get 요청을 한다.
    const data = await res.json();

    setTodos({
      isLoading: false,
      data: null,
      isError: false,
    });
  };

  const handleSubmit = async () => {
    try {
      /* const res = await fetch("http://localhost:5000/todos", {
      method: "post",
      body: JSON.stringify({
        //id는 자동적으로 1씩 증가시켜준다.
        text,
        done: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
 */

      //  await res.json();

      // 등록버튼 누르면 loading 중으로 바꾸기
      setTodos({
        ...todos,
        isLoading: true,
      });

      const res = await axios.post("http://localhost:5000/todos", {
        text,
        done: false,
      });

      console.log(res);

      await fetchData();
    } catch (e) {
      setTodos({
        isLoading: false,
        data: todos.data,
        isError: false,
      });
    }
  };

  const handleRemove = async (id) => {
    const res = await axios.delete("http://localhost:5000/todos/" + id);

    console.log(res);
    await fetchData();
  };

  const handleToggle = async (id, done) => {
    try {
      const res = await axios.patch("http://localhost:5000/todos/" + id, {
        done,
      });

      await fetchData();
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (todos.isLoading) return <div> loading....</div>;
  if (todos.isError) return <div> Error occurs!!!</div>;

  return (
    <div>
      {/* {todos[1].text} */}
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <ul>
        {todos.data.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.done && "line-through" }}
              onClick={() => handleToggle(todo.id, !todo.done)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
