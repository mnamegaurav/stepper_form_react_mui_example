import React from "react";
import { Grid, TextField } from "@mui/material";
import PhoneInput from "react-phone-number-input";

import BaseForm from "../layouts/BaseForm";

export default function ContactInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <BaseForm>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Email"
            variant="outlined"
            name="email"
            defaultValue={formState.email}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PhoneInput
            required
            size="small"
            label="Mobile Number"
            variant="outlined"
            name="mobileNumber"
            fullWidth
            defaultValue={formState.mobileNumber}
            onChange={(value) => console.log(value)}
            inputComponent={TextField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Address line 1"
            variant="outlined"
            name="addressLine1"
            fullWidth
            defaultValue={formState.addressLine1}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Address line 2"
            variant="outlined"
            name="addressLine2"
            fullWidth
            defaultValue={formState.addressLine2}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="City"
            variant="outlined"
            name="city"
            fullWidth
            defaultValue={formState.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="State/Province"
            variant="outlined"
            name="state"
            fullWidth
            defaultValue={formState.state}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="Postal / Zip Code"
            variant="outlined"
            name="zip"
            fullWidth
            defaultValue={formState.zip}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </BaseForm>
  );
}
