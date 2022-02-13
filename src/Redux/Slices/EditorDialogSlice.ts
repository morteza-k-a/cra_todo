import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {DialogState} from '../../interfaces'


const initialState: DialogState = {
  value: { show: false,id:'',text:'' },
};

export const EditorDialogSlice = createSlice({
  name: "EditorDialog",
  initialState,
  reducers: {
    showDialog: (state) => {
      state.value={show:true,text:'',id:''}
    },
    showDialogWithProps: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      state.value = {show:true,...action.payload}
    },
    hideDialog: (state) => {
      state.value.show = false;
    },
  },
});

export const { showDialog,showDialogWithProps,hideDialog } = EditorDialogSlice.actions;
export default EditorDialogSlice.reducer;
