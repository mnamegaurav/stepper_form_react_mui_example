import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "react-phone-number-input/style.css";

const useStyles = makeStyles((theme) => ({
  input: {},
}));

const PhoneNumber = (props, ref) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        InputProps={{
          className: classes.input,
        }}
        inputRef={ref}
        {...props}
      />
    </React.Fragment>
  );
};

export default React.forwardRef(PhoneNumber);
