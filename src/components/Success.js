import React from "react";
import { Typography, Box } from "@material-ui/core";

const maxSecondWait = 5;

export default function Success() {
  const [second, setSecond] = React.useState(0);

  React.useEffect(() => {
    const tID = setTimeout(function () {
      if (second < maxSecondWait) {
        setSecond((prevSecond) => prevSecond + 1);
      } else {
        window.location.href = "/";
        window.clearTimeout(tID); // clear time out.
      }
    }, 1000);
  }, [second]);

  return (
    <Box mx={3} style={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h5">
        Thanks for submitting your details, you will be redirected to Best
        Student Halls in {maxSecondWait} seconds, you have{" "}
        {maxSecondWait - second} seconds left.
      </Typography>
    </Box>
  );
}
