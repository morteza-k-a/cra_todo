import React from "react";
import { Fab, Fade, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { showDialog } from "../../Redux/Slices/DialogSlice";

const CustomFab = styled(Fab)`
  bottom: 20px;
  right: 20px;
  position: absolute;
`;

export function FAB() {
  const dispatch = useDispatch();
  return (
    <Fade in timeout={500}>
      <Tooltip title={'Add Todo'} placement={'top'} arrow>
        <CustomFab
          color={"primary"}
          aria-label={"add-button"}
          onClick={() => dispatch(showDialog())}
        >
          <AddIcon />
        </CustomFab>
      </Tooltip>
    </Fade>
  );
}
