import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {DialogState} from '../../interfaces'


const initialState: DialogState = {
  value: {id:'', show: false,text:'' },
};

export const DialogSlice = createSlice({
  name: "dialog",
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

export const { showDialog,showDialogWithProps,hideDialog } = DialogSlice.actions;
export default DialogSlice.reducer;
