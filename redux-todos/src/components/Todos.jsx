import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoHeader from "./TodoHeaders";

function Todos() {
    return(
        <div>
           <TodoHeader/>
           <TodoList/>
           <TodoInput/>

        </div>
    )
}

export default Todos;