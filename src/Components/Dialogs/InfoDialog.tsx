import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Slide,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import "./styles.css";

type CloseFunctionType = (
  event: {},
  reason: "backdropClick" | "escapeKeyDown" | "dismissed"
) => void;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction={"up"} ref={ref} {...props} />;
});

export function InfoDialog(props: {
  isOpen: boolean;
  CloseFunction: CloseFunctionType;
}) {
  const dismiss = () => {
    props.CloseFunction({}, "dismissed");
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.CloseFunction}
      aria-labelledby="form-dialog-title"
      TransitionComponent={Transition}
      transitionDuration={500}
      PaperProps={{ className: isMobile ? "MobileDialog" : undefined }}
    >
      <DialogTitle>about this app</DialogTitle>
      <DialogContent>
        You can add the tasks that you have planned for your day in this
        application so you would remember them.
        <br />
        this app is a PWA, which means you can install it on your local machine
        and use it even when you don't have an internet connection.
      </DialogContent>
      <DialogActions>
        <Button
          className={isMobile ? "wideButton" : undefined}
          onClick={dismiss}
        >
          GOT IT!
        </Button>
      </DialogActions>
    </Dialog>
  );
}
