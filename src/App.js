import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import PersonalInformation from "./components/PersonalInformation";
import ContactInformation from "./components/ContactInformation";
import CourseInformation from "./components/CourseInformation";
import EmergencyContactInformation from "./components/EmergencyContactInformation";
import GuarantorInformation from "./components/GuarantorInformation";
import AccommodationInformation from "./components/AccommodationInformation";
import Success from "./components/Success";

const steps = [
  "Personal Information",
  "Contact Information",
  "Course Information",
  "Emergency Contact Information",
  "Guarantor Information",
  "Accommodation Information",
];

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});

  const handleInputChange = (event) => {
    console.log(formState);
    setFormState((prevFormState) => ({
      ...prevFormState,
      [event.target.name]: event.target.value,
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

  return (
    <Grid container spacing={10}>
      <Grid item md={12}>
        <Box style={{ textAlign: "center" }} mt={5}>
          <img alt="bsh" src="bsh_logo.png" width="416" height="30" />
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box ml={3}>
          <Paper
            elevation={1}
            variant="outlined"
            style={{ background: "transparent" }}
          >
            <Box p={3}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item md={8}>
        <Paper
          elevation={1}
          variant="outlined"
          style={{ background: "transparent" }}
        >
          <Box p={3}>
            {activeStep === steps.length ? (
              <Success
                handleReset={handleReset}
                handleBack={handleBack}
                formState={formState}
              />
            ) : (
              <>
                <Box mb={3}>
                  <Typography variant="h5">{steps[activeStep]}</Typography>
                </Box>
                <Box>{renderForm(activeStep)}</Box>
                <Box mt={3}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                    disableElevation
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disableElevation
                    variant="contained"
                    color="info"
                    style={{ marginLeft: "10px" }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
