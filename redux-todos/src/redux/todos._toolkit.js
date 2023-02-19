//

import { createAction } from "@reduxjs/toolkit";
import produce from "immer";
import { nanoid } from "@reduxjs/toolkit";
//createAction: 액션의 타입과 액션 생성함수를 동시에 만든다.
// 함수를실행하면 인자는 payload라는 값으로 , 타입은 자동으로 지정된다.
export const createTodo = createAction("todos/create", function (text) {
  return {
    payload: {
      id: nanoid(),
      text,
      done: false,
      // 첫번째 인자는 교유한 키값, 두번재는 전달받은 payload값을 통해
      //새로운 객체를 새엉할 수 있는 prepare함수를 전달
    },
  };
});

export const removeTodo=createAction("todos/remove");
export const toggleTodo=createAction("todos/toggle");

export function todoToolkitReducer(state = [], action) {
  switch (action.type) {
    //immer에서 제공하는 produce 함수를 사용하면 불변성을 신경쓰지 않아도 된다.
    case createTodo.type:
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case toggleTodo.type:
      return produce(state, (draft) => {
        //불변성을 신경쓰지 않아도 돼서 찾아서 done값을 직접 변경
        const todo = draft.find((todo) => todo.id === action.payload);
        todo.done = !todo.done;
      });

    case removeTodo.type:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}
