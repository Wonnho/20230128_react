import { createContext, useContext, useReducer } from "react"


const initialState = [
    { id: 1, text: "요리", done: true },
    { id: 2, text: "청소", done: false },
    { id: 3, text: "체조", done: false },
  ];
  const TodoStateContext=createContext(null);
  const TodoDispatchContext=createContext(null);

  const reducer=(state,action)=>{
    switch(action.type) {
        case "create":
            return [...state,{id:action.id, text:action.text,done:false}];
            
        case "remove":
            return state.filter((todo)=>todo.id !==action.id);
        case "toggle":
            return state.map((todo)=>todo.id===action.id?{
                ...todo,done:!todo.done}:todo
            );
            default: return state;

    }

  }

export function TodoProvider({children}) {
 const [state,dispatch]=useReducer(reducer,initialState);


    return(
        <TodoStateContext.Provider value={state}>
<TodoDispatchContext.Provider value={dispatch}>
{children}
</TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}


export function useTodoState() {
    const context = useContext(TodoStateContext);
    if (!context) {
      throw new Error("Provider를 찾을 수가 없습니다.");
    }
    return context;
  }
  
  export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    return context;
  }
  