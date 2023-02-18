
import React, { useRef, useState } from "react";
import { useTodoDispatch } from "../context/todos";


const MakeTodo=({onSubmit})=>{

    const [inputText,setInputText]=useState();
   const dispatch=useTodoDispatch();

    const doInputText=(e)=>{
     e.preventDefault();
     setInputText(e.target.value);
    }


    const nextId=useRef(4);
    const doSubmit=(e)=>{
        e.preventDefault();
        dispatch({ type:"create",id:nextId.current++,text});     

    };

    return (
        <div>
            <form onSubmit={doSubmit}>
                <input type="text" value={inputText} onChange={doInputText}/>
               <button>추가</button>
            </form>
        </div>
    )
}

export default React.memo(MakeTodo);