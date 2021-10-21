import React from "react";
import { Box, CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useStore } from "../store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function UiLoader() {
  const classes = useStyles();

  const [state] = useStore();
  const { uiLoading } = state;

  return (
    <Box className={classes.root}>
      <Backdrop
        className={classes.backdrop}
        open={uiLoading}
        onClick={() => {}}
      >
        <CircularProgress
          variant="indeterminate"
          size={100}
          thickness={2}
          color="inherit"
        />
      </Backdrop>
    </Box>
  );
}
