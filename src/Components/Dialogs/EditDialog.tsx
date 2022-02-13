import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { RootState } from "../../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { hideDialog } from "../../Redux/Slices/EditorDialogSlice";
import { AddOrEditItem } from "../../Redux/Slices/TodoSlice";
import './styles.css'

type CloseFunctionType = (
  event: {},
  reason: "backdropClick" | "escapeKeyDown" | "dismissed" | "Added"
) => void;

export function EditDialog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const DialogProps = useSelector((state: RootState) => state.editor.value);
  const [Text, setText] = React.useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(()=>{setText(DialogProps.text)},[DialogProps.show])
  const CloseDialog: CloseFunctionType = () => {
    setText("");
    dispatch(hideDialog());
  };
  const EditToDo = () => {
    dispatch(AddOrEditItem({ id: DialogProps.id, text: Text }));
    CloseDialog({}, "Added");
  };
  return (
    <Dialog
      open={DialogProps.show}
      onClose={CloseDialog}
      aria-labelledby="form-dialog-title"
      fullScreen={isMobile}
    >
      <DialogTitle id="form-dialog-title">Edit to-do</DialogTitle>
      <DialogContent>
        <DialogContentText>
        
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="task to do"
          fullWidth
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => CloseDialog({}, "dismissed")} variant={"text"}>
          Cancel
        </Button>
        <Button disabled={!Boolean(Text)} onClick={EditToDo}>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
