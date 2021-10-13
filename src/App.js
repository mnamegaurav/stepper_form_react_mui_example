import React from "react";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Paper,
  MobileStepper,
  Container,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import PersonalInformation from "./components/PersonalInformation";
import ContactInformation from "./components/ContactInformation";
import CourseInformation from "./components/CourseInformation";
import EmergencyContactInformation from "./components/EmergencyContactInformation";
import GuarantorInformation from "./components/GuarantorInformation";
import AccommodationInformation from "./components/AccommodationInformation";
import Success from "./components/Success";
import BaseForm from "./layouts/BaseForm";

const useStyles = makeStyles((theme) => ({
  bshLogo: {
    [theme.breakpoints.up("md")]: {
      height: "2rem",
    },
    height: "20px",
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
  responsiveButtonGroup: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
  responsiveNextBtn: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {},
  },
}));

const steps = [
  "Personal Information",
  "Contact Information",
  "Course Information",
  "Emergency Contact Information",
  "Guarantor Information",
  "Accommodation Information",
];

export default function App() {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});

  const handleInputChange = ({ fieldName, fieldValue }) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [fieldName]: fieldValue,
    }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInformation
            formState={formState}
            handleInputChange={handleInputChange}
          />
        );
      case 1:
        return (
          <ContactInformation
            formState={formState}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <CourseInformation
            formState={formState}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <EmergencyContactInformation
            formState={formState}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <GuarantorInformation
            formState={formState}
            handleInputChange={handleInputChange}
          />
        );
      case 5:
        return (
          <AccommodationInformation
            formState={formState}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return <Typography>Some Error Found</Typography>;
    }
  };

  const nextButton = () => (
    <Button
      onClick={handleNext}
      disableElevation
      variant="contained"
      color="primary"
      className={classes.responsiveNextBtn}
    >
      {activeStep === steps.length - 1 ? "Finish" : "Next"}
      {theme.direction === "rtl" ? (
        <KeyboardArrowLeft />
      ) : (
        <KeyboardArrowRight />
      )}
    </Button>
  );

  const backButton = () => (
    <Button
      color="inherit"
      disabled={activeStep === 0}
      onClick={handleBack}
      variant="contained"
      disableElevation
    >
      {theme.direction === "rtl" ? (
        <KeyboardArrowRight />
      ) : (
        <KeyboardArrowLeft />
      )}
      Back
    </Button>
  );

  return (
    <Box>
      <Box style={{ textAlign: "center" }} mt={7} mb={3}>
        <img alt="bsh" src="bsh_logo.png" className={classes.bshLogo} />
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
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={8} xl={9}>
            <Paper variant="outlined" style={{ background: "#f9f9f9e0" }}>
              <Box py={3}>
                {activeStep === steps.length ? (
                  <Success
                    handleReset={handleReset}
                    handleBack={handleBack}
                    formState={formState}
                  />
                ) : (
                  <>
                    <BaseForm>
                      <Box className={classes.mobileOnly}>
                        <MobileStepper
                          variant="dots"
                          steps={steps.length}
                          position="static"
                          activeStep={activeStep}
                          className={classes.mobileStepper}
                        />
                      </Box>
                      <Box my={3}>
                        <Typography variant="h5">
                          {steps[activeStep]}
                        </Typography>
                      </Box>
                      {renderForm(activeStep)}
                      <Box mt={3} className={classes.responsiveButtonGroup}>
                        {backButton()}
                        {nextButton()}
                      </Box>
                    </BaseForm>
                  </>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
