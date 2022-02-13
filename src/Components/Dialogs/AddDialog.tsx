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
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { hideDialog } from "../../Redux/Slices/DialogSlice";
import { AddOrEditItem } from "../../Redux/Slices/TodoSlice";
import './styles.css'

type CloseFunctionType = (
  event: {},
  reason: "backdropClick" | "escapeKeyDown" | "dismissed" | "Added"
) => void;

export function AddDialog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const [Text, setText] = React.useState("");
  const DialogProps = useSelector((state: RootState) => state.Dialog.value);
  const CloseDialog: CloseFunctionType = () => {
    setText("");
    dispatch(hideDialog());
  };
  const AddToDo = () => {
    dispatch(AddOrEditItem({ id: uuidv4(), text: Text }));
    CloseDialog({}, "Added");
  };
  return (
    <Dialog
      open={DialogProps.show}
      onClose={CloseDialog}
      aria-labelledby="form-dialog-title"
      fullScreen={isMobile}
    >
      <DialogTitle id="form-dialog-title">add to-do</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You got a task that you should do? <br />
          Write it down in the box and click the add button to add it to the
          list.
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
        <Button disabled={!Boolean(Text)} onClick={AddToDo}>
          add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
