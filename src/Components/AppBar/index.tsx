import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import './styles.css'
export function Appbar() {
  return (
    <AppBar color={"primary"}>
      <Toolbar className={'Toolbar'}>
        Todo
        <IconButton className={'info-icon'} aria-label={"info"}>
          <InfoOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
