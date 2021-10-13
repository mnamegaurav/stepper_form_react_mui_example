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

import BaseForm from "../layouts/BaseForm";

export default function PersonalInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <BaseForm>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="First Name"
            variant="outlined"
            name="firstName"
            defaultValue={formState.firstName}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Last Name"
            variant="outlined"
            name="lastName"
            fullWidth
            defaultValue={formState.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            onChange={handleInputChange}
            id="date"
            name="dob"
            label="Date Of Birth"
            type="date"
            fullWidth
            defaultValue={formState.dob || new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              defaultValue={formState.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Nationality"
            variant="outlined"
            name="nationality"
            fullWidth
            defaultValue={formState.nationality}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Country"
            variant="outlined"
            name="country"
            fullWidth
            defaultValue={formState.country}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </BaseForm>
  );
}
