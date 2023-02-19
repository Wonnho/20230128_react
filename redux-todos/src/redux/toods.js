import produce from "immer";

const initialState=[
    {id:1,text:"redux",done:true},
    {id:2, text:"dispatch",done:false},
    {id:3, text:"reduxReducer",done:false},

]

const CREATE="CREATE";
const REMOVE="REMOVE";
const TOGGLE="TOGGLE";

function todoReducer(state=initialState,action) {
    switch(action.type) {
        //immer에서 제공하는 produce 함수를 사용하면 불변성을 신경쓰지 않아도 된다.
        case CREATE: return produce(state,(draft)=>{
            draft.push({id:action.id,text:action.text,done:false})
        });
        case TOGGLE:
            return produce(state,(draft)=>{
                //불변성을 신경쓰지 않아도 돼서 찾아서 done값을 직접 변경
                const todo=draft.find(todo=>todo.id===action.id);
                todo.done=!todo.done;
            });

            case REMOVE:
                return state.filter((todo)=>todo.id !==action.id);

        default: return state;
    }

}