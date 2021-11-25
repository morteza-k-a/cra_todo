import React from "react";
import { Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function FAB() {
  return (
    <Fab>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Fab>
  );
}
