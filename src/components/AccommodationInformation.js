import React from "react";
import {
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function AccommodationInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="medium"
            multiline
            label="Email Ids"
            placeholder="If you are booking with other people, write name and email ids of all people. e.g. Peter Parker:peterparker@gmail.com"
            variant="outlined"
            name="booking_others"
            defaultValue={formState.booking_others}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            rows={5}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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
              aria-label="length_of_stay_choices"
              name="length_of_stay_choices"
              value={formState.length_of_stay_choices}
              onChange={(event) =>
                handleInputChange({
                  fieldName: event.target.name,
                  fieldValue: event.target.value,
                })
              }
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
                name="length_of_stay_other"
                disabled={parseInt(formState.length_of_stay_choices) !== 1}
                defaultValue={formState.length_of_stay_other}
                onChange={(event) =>
                  handleInputChange({
                    fieldName: event.target.name,
                    fieldValue: event.target.value,
                  })
                }
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="medium"
            label="When do you wish to move in to this accommodation?"
            variant="outlined"
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            name="move_in_date"
            type="date"
            fullWidth
            defaultValue={formState.move_in_date}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="medium"
            label="Room Type"
            placeholder="Which room type would you like to book in the selected accommodation?"
            variant="outlined"
            name="room_type"
            defaultValue={formState.room_type}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            InputLabelProps={{
              shrink: true,
            }}
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
              aria-label="medical_condition"
              name="medical_condition"
              value={formState.medical_condition}
              onChange={(event) =>
                handleInputChange({
                  fieldName: event.target.name,
                  fieldValue: event.target.value,
                })
              }
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
            label="Special requirements?"
            placeholder="Any special requirements?"
            variant="outlined"
            name="special_requirements"
            defaultValue={formState.special_requirements}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            rows={5}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
