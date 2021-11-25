import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  text:string
}

export interface TodoState {
  value: Array<TodoItem>;
}

const initialState: TodoState = {
  value: [
      {text:'item 1'},
      {text:'item 2'},
  ],
};

export const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(state.value);
    },
    decrement: (state) => {
      console.log(state.value);
    },
    incrementByAmount: (state, action: PayloadAction<TodoItem>) => {
      // console.log(state.value);
      // console.log(action.payload);
      state.value = state.value.concat(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = TodoSlice.actions
export default TodoSlice.reducer