import React from "react";
import axios from "axios";
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
import {
  NEXT_STEP,
  PREVIOUS_STEP,
  INPUT_CHANGE,
  UI_LOADING_START,
  UI_LOADING_END,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILED,
} from "../store/constants";
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
  formContainerBox: {
    display: "flex",
    flexDirection: "column",
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

  const handleNext = (event) => {
    event.preventDefault();
    console.log(formData);
    if (!formRef.current.checkValidity()) {
      // check for form validity
      return;
    } else {
      // form is valid
      if (activeStep === steps.length - 1) {
        // if last step
        handleFormSubmit();
      } else {
        // if not last step
        dispatch({ type: NEXT_STEP });
      }
    }
  };

  const handleBack = () => {
    dispatch({ type: PREVIOUS_STEP });
  };

  const handleFormSubmit = () => {
    console.log("submit");
    dispatch({
      type: UI_LOADING_START,
    });
    axios
      .post(
        "/booking-form/api/booking/create/",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        //Show the alert
        console.log(res);
        dispatch({
          type: FORM_SUBMIT_SUCCESS,
        });
        // End Loading the UI
        dispatch({
          type: UI_LOADING_END,
        });
        dispatch({ type: NEXT_STEP });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FORM_SUBMIT_FAILED,
        });
        // End Loading the UI
        dispatch({
          type: UI_LOADING_END,
        });
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

  const nextButton = () => (
    <Button
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
    <Container>
      <form ref={formRef} method="POST" onSubmit={handleNext}>
        <Box className={classes.formContainerBox}>
          {children}
          <Box my={3}>{renderForm(activeStep)}</Box>
          <Box mt={3} className={classes.responsiveButtonGroup}>
            {backButton()}
            {nextButton()}
          </Box>
        </Box>
      </form>
    </Container>
  );
}
