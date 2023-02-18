import { useTodoState,useTodoDispatch } from "../context/todos";

const TodoList=()=>{
    const todos=useTodoState();

    return (
        <div>
            <ul>
                {todos.map((todo)=>{
                    <TodoItem key={todo.id}
                    todo={todo}/>


                })}
            </ul>
        </div>
    )
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
  


export default TodoList;