import { configureStore } from '@reduxjs/toolkit'
import TodosReducer from './Slices/TodoSlice'


export const store = configureStore({
  reducer: TodosReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch