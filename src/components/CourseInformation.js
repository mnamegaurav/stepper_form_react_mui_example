import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { useStore } from "../store";

export default function CourseInformation(props) {
  const { formState, handleInputChange } = props;

  const [state] = useStore();
  const { enrollmentStatuses } = state;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            size="medium"
            label="University Name"
            placeholder="Which University are you going to attend?"
            variant="outlined"
            name="university"
            defaultValue={formState.university}
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
          <TextField
            required
            size="medium"
            label="Course Name"
            placeholder="Which course are you going to take?"
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
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="enrolmentStatus">Enrollment Status</InputLabel>
            <Select
              inputProps={{
                size: "medium"
              }}
              label="Enrollment Status (for the next academic year)"
              variant="outlined"
              name="enrolment_status"
              fullWidth
              value={formState.enrolment_status || ""}
              onChange={(event) =>
                handleInputChange({
                  fieldName: event.target.name,
                  fieldValue: event.target.value,
                })
              }
              inputlabelprops={{
                shrink: true,
              }}
              required
            >
              {enrollmentStatuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
