import React from "react";
import { Box } from "@mui/material";
import "react-phone-number-input/style.css";

export default function BaseForm(props) {
  const { children } = props;

  return <Box>{children}</Box>;
}
