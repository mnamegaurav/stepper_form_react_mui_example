import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  Paper,
  MobileStepper,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Success from "./components/Success";
import BaseForm from "./layouts/BaseForm";
import { useStore } from "./store";

const useStyles = makeStyles((theme) => ({
  bshLogo: {
    [theme.breakpoints.up("md")]: {
      height: "2rem",
    },
    height: "20px",
  },
  bshLogoBox: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
    },
  },
  container: {
    justifyContent: "center",
  },
  mobileStepper: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "flex",
    flexGrow: 1,
    background: "transparent",
    paddingLeft: "0",
    paddingRight: "0",
    justifyContent: "center",
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "#abd039",
    },
  },
  mobileOnly: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "block",
  },
  desktopOnly: {
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    display: "none",
  },
  formPaper: {
    background: "#f9f9f9e0",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
  },
  stepLabel: {
    "& .MuiStepLabel-label": {},
    "& .MuiStepLabel-label.MuiStepLabel-active": {},
  },
}));

export default function App() {
  const classes = useStyles();
  const [state] = useStore();
  const { steps, activeStep } = state;

  return (
    <Box>
      <Box className={classes.bshLogoBox}>
        <img
          alt="bsh"
          src="https://beststudenthalls.com/static/images/a_logo%402x.png"
          className={classes.bshLogo}
        />
      </Box>
      <Container>
        <Grid container spacing={4} className={classes.container}>
          <Grid item md={4} xl={3} className={classes.desktopOnly}>
            <Paper variant="outlined" style={{ background: "#f9f9f9e0" }}>
              <Box p={3}>
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                  style={{ background: "transparent" }}
                >
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel className={classes.stepLabel}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={8} xl={9}>
            <Paper variant="outlined" className={classes.formPaper}>
              <Box py={3} style={{ width: "100%" }}>
                {activeStep === steps.length ? (
                  <Success />
                ) : (
                  <BaseForm>
                    <Box className={classes.mobileOnly} mb={3}>
                      <MobileStepper
                        variant="dots"
                        steps={steps.length}
                        position="static"
                        activeStep={activeStep}
                        className={classes.mobileStepper}
                      />
                    </Box>
                    <Box mb={3}>
                      <Typography variant="h5">{steps[activeStep]}</Typography>
                    </Box>
                  </BaseForm>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
