import React from "react";
import { Button, Typography, Box } from "@mui/material";

import BaseForm from "../layouts/BaseForm";

export default function Success(props) {
  const { handleBack, handleReset, formState } = props;

  return (
    <BaseForm>
      <Box mb={2}>
        <Typography variant="h5">
          Thanks for submitting your details.
        </Typography>
      </Box>
      <Box>
        {Object.keys(formState).map((key) => {
          return (
            <Box>
              <Typography
                variant="body1"
                style={{ textTransform: "capitalize" }}
              >
                {key}: {formState[key]}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box mt={3}>
        <Button
          color="inherit"
          onClick={handleBack}
          variant="outlined"
          disableElevation
        >
          Back
        </Button>
        <Button
          color="secondary"
          onClick={handleReset}
          variant="outlined"
          disableElevation
          style={{ marginLeft: "10px" }}
        >
          Reset
        </Button>
      </Box>
    </BaseForm>
  );
}
