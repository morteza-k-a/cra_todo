import { Paper, Slide } from "@mui/material";
import React from "react";
import "./styles.css";
import { TodoItemControls } from "../";
import { useDispatch } from "react-redux";
import { DeleteItem } from "../../Redux/Slices/TodoSlice";
import { showDialogWithProps } from "../../Redux/Slices/EditorDialogSlice";

export function TodoItem(props: { text: string; id: string }) {
  const dispatch = useDispatch();
  const DeleteTodo: () => void = () => {
    dispatch(DeleteItem(props.id));
  };
  const EditTodo = () => {
    dispatch(showDialogWithProps(props));
  }
  return (
    <Slide direction={"down"} timeout={500} in>
      <Paper className={"todoItem"}>
        <p className={"todoText"}>{props.text}</p>
        <TodoItemControls
          DeleteFunction={DeleteTodo}
          EditFunction={EditTodo}
        />
      </Paper>
    </Slide>
  );
}
