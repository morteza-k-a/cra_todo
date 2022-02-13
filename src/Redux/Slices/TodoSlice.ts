import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItem } from "../../interfaces";
import {ReadFromlocalStorage,SaveTolocalStorage} from '../../enhancers/localStorage'
const initialState: TodoState = {
  value: ReadFromlocalStorage('todos') || [],
};

export const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    DeleteItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
const data = state.value.filter((item) => item.id !== id);
      state.value = data;
      SaveTolocalStorage('todos',state.value)
    },
    AddOrEditItem: (state, action: PayloadAction<TodoItem>) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) state.value = state.value.concat(action.payload);
      else state.value[index] = action.payload;
      SaveTolocalStorage('todos',state.value)
    },
  },
});

export const { DeleteItem, AddOrEditItem } = TodoSlice.actions;
export default TodoSlice.reducer;
