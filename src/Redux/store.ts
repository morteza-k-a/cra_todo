import { configureStore , combineReducers } from '@reduxjs/toolkit'
import TodosReducer from './Slices/TodoSlice'
import DialogReducer from './Slices/DialogSlice'
import EditorReducer from './Slices/EditorDialogSlice'

const MainReducer = combineReducers({
  todos:TodosReducer,
  Dialog:DialogReducer,
  editor:EditorReducer
})

export const store = configureStore({
  reducer: MainReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch