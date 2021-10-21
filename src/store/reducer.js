import {
  NEXT_STEP,
  PREVIOUS_STEP,
  RESET_STEP,
  UI_LOADING_START,
  UI_LOADING_END,
  INPUT_CHANGE,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_FAILED,
} from "./constants";

export const initialState = {
  uiLoading: false,
  activeStep: 0,
  personTitles: [
    { value: "Mr", label: "Mr" },
    { value: "Ms", label: "Ms" },
    { value: "Mrs", label: "Mrs" },
    { value: "Miss", label: "Miss" },
    { value: "Dr", label: "Dr" },
    { value: "Other", label: "Other" },
  ],
  genders: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ],
  lengthOfStayChoices: [
    { value: "8 - 12 weeks", label: "8 - 12 weeks" },
    { value: "44 weeks", label: "44 weeks" },
    { value: "51 weeks", label: "51 weeks" },
  ],
  enrollmentStatuses: [
    { value: "First Year Undergraduate", label: "First Year Undergraduate" },
    { value: "Non-Student", label: "Non-Student" },
    { value: "Nurse", label: "Nurse" },
    { value: "Graduate", label: "Graduate" },
    { value: "Second Year Graduate", label: "Second Year Graduate" },
    {
      value: "Third Year or Above Graduate",
      label: "Third Year or Above Graduate",
    },
  ],
  formData: {
    title: null,
    first_name: "",
    last_name: "",
    dob: null,
    gender: null,
    nationality: "",
    country: "",
    email: "",
    mobile_country: "",
    mobile_number: "",
    home_country: "",
    home_number: "",
    university: "",
    course: "",
    enrolment_status: null,
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    postcode: "",
    emergency_name: "",
    emergency_mobile: "",
    emergency_salutation: null,
    emergency_email: "",
    emergency_dob: null,
    emergency_relationship: "",
    emergency_address_line_1: "",
    emergency_address_line_2: "",
    emergency_city: "",
    emergency_state: "",
    emergency_postcode: "",
    guarantor_different: null,
    guarantor_name: "",
    guarantor_mobile: "",
    guarantor_salutation: null,
    guarantor_email: "",
    guarantor_dob: null,
    guarantor_relationship: "",
    guarantor_address_line_1: "",
    guarantor_address_line_2: "",
    guarantor_city: "",
    guarantor_state: "",
    guarantor_postcode: "",
    booking_others: "",
    move_in_date: null,
    length_of_stay_choices: null,
    length_of_stay_other: "",
    room_type: "",
    medical_condition: null,
    special_requirements: "",
    date: null,
    listing: null,
    room: null,
    option: null,
  },
  formSubmitSuccess: null,
  steps: [
    "Personal Information",
    "Contact Information",
    "Course Information",
    "Emergency Contact Information",
    "Guarantor Information",
    "Accommodation Information",
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    }
    case FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        formSubmitSuccess: true,
      };
    }
    case FORM_SUBMIT_FAILED: {
      return {
        ...state,
        formSubmitSuccess: false,
      };
    }
    case NEXT_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case PREVIOUS_STEP:
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case RESET_STEP:
      return {
        ...state,
        ...initialState,
      };
    case UI_LOADING_START:
      return {
        ...state,
        uiLoading: true,
      };
    case UI_LOADING_END:
      return {
        ...state,
        uiLoading: false,
      };
    default:
      return state;
  }
};