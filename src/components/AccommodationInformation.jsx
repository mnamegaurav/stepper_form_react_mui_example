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

export default function AccommodationInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <BaseForm>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="small"
            multiline
            label="If you are booking with other people, write name and email ids of all people"
            variant="outlined"
            name="emailsIdsOfAllPeople"
            defaultValue={formState.emailsIdsOfAllPeople}
            onChange={handleInputChange}
            placeholder="e.g. Peter Parker:peterparker@gmail.com"
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              How long do you want to stay ? (Must be greater or equal to 8
              weeks)
            </FormLabel>
            <RadioGroup
              row
              aria-label="howLongToStay"
              name="howLongToStay"
              defaultValue={formState.howLongToStay}
              onChange={handleInputChange}
              required
            >
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="8-12 Weeks"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="44 Weeks"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="51 Weeks"
              />
              <FormControlLabel value="1" control={<Radio />} label="Other" />
              <TextField
                size="small"
                label="Other length of stay"
                variant="filled"
                name="otherLengthOfStay"
                disabled={parseInt(formState.howLongToStay) !== 1}
                defaultValue={formState.otherLengthOfStay}
                onChange={handleInputChange}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="small"
            label="When do you wish to move in to this accommodation?"
            variant="outlined"
            onChange={handleInputChange}
            name="moveInDate"
            type="date"
            fullWidth
            defaultValue={formState.moveInDate || new Date()}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="small"
            label="Which room type would you like to book in the selected accommodation?"
            variant="outlined"
            name="roomType"
            defaultValue={formState.roomType}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Do you have a medical condition or disability we should be aware
              of while allocating you a room?
            </FormLabel>
            <RadioGroup
              row
              aria-label="isMedicalConditionOrDisability"
              name="isMedicalConditionOrDisability"
              defaultValue={formState.isMedicalConditionOrDisability}
              onChange={handleInputChange}
              required
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="2" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            size="small"
            multiline
            label="Any special requirements?"
            variant="outlined"
            name="specialRequirements"
            defaultValue={formState.specialRequirements}
            onChange={handleInputChange}
            rows={4}
            fullWidth
          />
        </Grid>
      </Grid>
    </BaseForm>
  );
}
