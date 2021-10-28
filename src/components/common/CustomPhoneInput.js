import React from "react";
import PhoneInput from "react-phone-number-input";

import PhoneNumber from "./PhoneNumber";

export default function CustomPhoneInput(props) {
  return (
    <React.Fragment>
      <PhoneInput defaultCountry="GB" inputComponent={PhoneNumber} {...props} />
    </React.Fragment>
  );
}
