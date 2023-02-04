function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo }) {
  return (
    <li>
      <span>{todo.text}</span>
      <button>삭제 </button>
    </li>
  );
}

export default TodoList;
