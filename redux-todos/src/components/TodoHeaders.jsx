import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const getTodos=(state)=>state.todos;

//첫번째 인자로 전달받은 상태가 변하지 않으면 렌더링이 다시 일어나도 재계산;
//usememo()와 동일한 기능
const getUndoneCount=createSelector(getTodos,(state)=>{
    console.log("calculating....");
    return state.filter(todo=>!todo.done).length;
})

function TodoHeader() {
 
  const undoneCount = useSelector(getUndoneCount);

  return (
    <div>
      <h2>todo list</h2>
      <p>해야할일:{undoneCount}</p>
    </div>
  );
}

export default TodoHeader;
