import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
const CustomFab = styled(Fab)`
  bottom: 20px;
  right: 20px;
  position: absolute;
`;

export function FAB() {
  return (
    <CustomFab color={'primary'} aria-label={'add-button'}>
      <AddIcon />
    </CustomFab>
  );
}
