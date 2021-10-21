import React from "react";
import "react-phone-input-2/lib/material.css";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Box, Button, Typography, Container } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import PersonalInformation from "../components/PersonalInformation";
import ContactInformation from "../components/ContactInformation";
import CourseInformation from "../components/CourseInformation";
import EmergencyContactInformation from "../components/EmergencyContactInformation";
import GuarantorInformation from "../components/GuarantorInformation";
import AccommodationInformation from "../components/AccommodationInformation";
import { NEXT_STEP, PREVIOUS_STEP, INPUT_CHANGE } from "../store/constants";
import { useStore } from "../store";

const useStyles = makeStyles((theme) => ({
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

export default function BaseForm(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [state, dispatch] = useStore();
  const { steps, activeStep, formData } = state;

  const { children } = props;

  const formRef = React.useRef(null);

  const handleInputChange = ({ fieldName, fieldValue }) => {
    dispatch({
      type: INPUT_CHANGE,
      payload: { [fieldName]: fieldValue },
    });
  };

  const renderForm = (activeStep) => {
    switch (activeStep) {
      case 0:
        return (
          <PersonalInformation
            formState={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 1:
        return (
          <ContactInformation
            formState={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <CourseInformation
            formState={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <EmergencyContactInformation
            formState={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <GuarantorInformation
            formState={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 5:
        return (
          <AccommodationInformation
            formState={formData}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return <Typography>Some Error Found</Typography>;
    }
  };

  const handleNext = () => {
    // if (!formRef.current.checkValidity()) {
    //   return;
    // }
    dispatch({ type: NEXT_STEP });
  };

  const handleBack = () => {
    dispatch({ type: PREVIOUS_STEP });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    console.log(formRef);
    console.log(formData);
    // dispatch({
    //   type: UI_LOADING_START,
    // });
    // axios
    //   .post("booking/api/booking/create/", JSON.stringify(formState))
    //   .then((res) => {
    //     //Show the alert
    //     dispatch({
    //       type: FORM_SUBMIT_SUCCESS,
    //     });
    //     // End Loading the UI
    //     dispatch({
    //       type: UI_LOADING_END,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FORM_SUBMIT_FAILED,
    //     });
    //     // End Loading the UI
    //     dispatch({
    //       type: UI_LOADING_END,
    //     });
    //   });
  };

  const nextButton = () => (
    <Button
      onClick={activeStep === steps.length - 1 ? () => {} : handleNext}
      disableElevation
      variant="contained"
      color="primary"
      type="submit"
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
      type="button"
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
      <Container>
        <form ref={formRef} method="POST" onSubmit={handleFormSubmit}>
          {children}
          <Box my={3}>{renderForm(activeStep)}</Box>
          <Box mt={3} className={classes.responsiveButtonGroup}>
            {backButton()}
            {nextButton()}
          </Box>
        </form>
      </Container>
    </Box>
  );
}