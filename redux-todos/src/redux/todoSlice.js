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
  },
});

export const { createTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
