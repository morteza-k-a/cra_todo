import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import styled from "@emotion/styled";


const Root = styled.div`
  display: flex;
`;

export function TodoItemControls(props: {
  DeleteFunction: () => void;
  EditFunction : () => void;
}) {
  return (
    <Root>
      <IconButton aria-label={"edit"} onClick={props.EditFunction}>
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
      <IconButton aria-label={"delete"} onClick={props.DeleteFunction}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Root>
  );
}
