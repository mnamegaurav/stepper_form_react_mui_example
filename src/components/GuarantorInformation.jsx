import React from "react";
import { Grid, TextField } from "@mui/material";
import PhoneInput from "react-phone-number-input";

import BaseForm from "../layouts/BaseForm";

export default function GuarantorInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <BaseForm>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Guarantor contact name"
            variant="outlined"
            name="guarantorContactName"
            defaultValue={formState.guarantorContactName}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PhoneInput
            required
            size="small"
            label="Guarantor Mobile Number"
            variant="outlined"
            name="guarantorMobileNumber"
            defaultValue={formState.guarantorMobileNumber}
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
            name="guarantorContactAddressLine1"
            fullWidth
            defaultValue={formState.guarantorContactAddressLine1}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Address line 2"
            variant="outlined"
            name="guarantorContactAddressLine2"
            fullWidth
            defaultValue={formState.guarantorContactAddressLine2}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            onChange={handleInputChange}
            id="date"
            name="guarantorContactDob"
            label="Date Of Birth"
            type="date"
            fullWidth
            defaultValue={formState.guarantorContactDob || new Date()}
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
            name="guarantorContactRelationship"
            fullWidth
            defaultValue={formState.guarantorContactRelationship}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="City"
            variant="outlined"
            name="guarantorContactCity"
            fullWidth
            defaultValue={formState.guarantorContactCity}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="State/Province"
            variant="outlined"
            name="guarantorContactState"
            fullWidth
            defaultValue={formState.guarantorContactState}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="Postal / Zip Code"
            variant="outlined"
            name="guarantorContactZip"
            fullWidth
            defaultValue={formState.guarantorContactZip}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </BaseForm>
  );
}
