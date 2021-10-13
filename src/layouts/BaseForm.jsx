import React from "react";
import { Box, Container } from "@material-ui/core";
import "react-phone-input-2/lib/material.css";

export default function BaseForm(props) {
  const { children } = props;

  return (
    <Box>
      <Container>{children}</Container>
    </Box>
  );
}
