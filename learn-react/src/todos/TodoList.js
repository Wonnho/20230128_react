import { useMemo } from "react";

function countUndoneTodo(todos) {
  return todos.filter((todo) => !todo.done).length;
}

function TodoList({ todos, onRemove, onToggle }) {
  //의존성 배열에 있는 값이 변했을 때에만 다시 연산을 한다.
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
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onRemove, onToggle }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.done && "line-through" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제 </button>
    </li>
  );
}

export default TodoList;
