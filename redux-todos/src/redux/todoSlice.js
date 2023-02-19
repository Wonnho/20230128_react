import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [{ id: 1, text: "Slice", done: false }],
  reducers: {
    createTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            done: false,
            createdAt: new Date().toDateString(),
          },
        };
      },
    },
      toggleTodo(state,action){
        const todo=state.find((todo)=>todo.id===action.payload);
        todo.done=!todo.done;
      },
      removeTodo(state,action) {
        return state.filter((todo)=>todo.id!==action.payload);
        //기존배열을 바꾸는게 아니니가 return을 넣어주어야 한다.
      },
    
  },
});



export const { createTodo,toggleTodo,removeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
