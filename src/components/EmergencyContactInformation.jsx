import React from "react";
import {
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import PhoneInput from "react-phone-number-input";

import BaseForm from "../layouts/BaseForm";

export default function EmergencyContactInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <BaseForm>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Emergency contact name"
            variant="outlined"
            name="emergencyContactName"
            defaultValue={formState.emergencyContactName}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PhoneInput
            required
            size="small"
            label="Emergency Mobile Number"
            variant="outlined"
            name="emergencyMobileNumber"
            defaultValue={formState.emergencyMobileNumber}
            onChange={(value) => console.log(value)}
            fullWidth
            inputComponent={TextField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Address line 1"
            variant="outlined"
            name="emergencyContactAddressLine1"
            fullWidth
            defaultValue={formState.emergencyContactAddressLine1}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Address line 2"
            variant="outlined"
            name="emergencyContactAddressLine2"
            fullWidth
            defaultValue={formState.emergencyContactAddressLine2}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            onChange={handleInputChange}
            id="date"
            name="emergencyContactDob"
            label="Date Of Birth"
            type="date"
            fullWidth
            defaultValue={formState.emergencyContactDob || new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Relationship"
            variant="outlined"
            name="emergencyContactRelationship"
            fullWidth
            defaultValue={formState.emergencyContactRelationship}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="City"
            variant="outlined"
            name="emergencyContactCity"
            fullWidth
            defaultValue={formState.emergencyContactCity}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="State/Province"
            variant="outlined"
            name="emergencyContactState"
            fullWidth
            defaultValue={formState.emergencyContactState}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="Postal / Zip Code"
            variant="outlined"
            name="emergencyContactZip"
            fullWidth
            defaultValue={formState.emergencyContactZip}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Is your Guarantor different from the emergency contact?
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              defaultValue={formState.isGuarantorDifferenceFromEmergencyContact}
              onChange={handleInputChange}
              required
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </BaseForm>
  );
}
