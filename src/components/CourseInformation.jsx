import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";

export default function CourseInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            size="small"
            label="Which University are you going to attend?"
            variant="outlined"
            name="university"
            defaultValue={formState.university}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            size="small"
            label="Which course are you going to take?"
            variant="outlined"
            name="course"
            fullWidth
            defaultValue={formState.course}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Enrollment Status (for the next academic year)
            </InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              label="Enrollment Status (for the next academic year)"
              variant="outlined"
              name="enrollmentStatus"
              fullWidth
              defaultValue={formState.enrollmentStatus}
              onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
              required
            >
              <MenuItem value={1}>First Year Undergraduate</MenuItem>
              <MenuItem value={2}>Non-Student</MenuItem>
              <MenuItem value={3}>Nurse</MenuItem>
              <MenuItem value={3}>Graduate</MenuItem>
              <MenuItem value={3}>Second Year Graduate</MenuItem>
              <MenuItem value={3}>Third Year or Above Graduate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
