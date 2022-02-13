import React from "react";
import { AppBar, Toolbar, IconButton, Slide, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./styles.css";
import { InfoDialog } from "../";

export function Appbar() {
  const [ShowInfo, setShowInfo] = React.useState<boolean>(false);
  const CloseDialog = () => {
    setShowInfo(false);
  };
  const openDialog = () => {
    setShowInfo(true);
  };
  return (
    <Slide direction="down" timeout={500} in>
      <AppBar color={"primary"}>
        <Toolbar className={"Toolbar"}>
          Todo
          <Tooltip title={'App info'} arrow> 
            <IconButton
              className={"info-icon"}
              aria-label={"info"}
              onClick={openDialog}
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <InfoDialog isOpen={ShowInfo} CloseFunction={CloseDialog} />
      </AppBar>
    </Slide>
  );
}
