import React from "react";
import {
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";

import { useStore } from "../store";

export default function PersonalInformation(props) {
  const { formState, handleInputChange } = props;

  const [state] = useStore();
  const { personTitles, genders } = state;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="First Name"
            placeholder="First Name"
            variant="outlined"
            name="first_name"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={formState.first_name}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select
                    required
                    name="title"
                    style={{ background: "transparent" }}
                    variant="standard"
                    size="small"
                    value={formState.title || ""}
                    displayEmpty
                    onChange={(event) =>
                      handleInputChange({
                        fieldName: event.target.name,
                        fieldValue: event.target.value,
                      })
                    }
                  >
                    <MenuItem value="" disabled>
                      Title
                    </MenuItem>
                    {personTitles.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Last Name"
            placeholder="Last Name"
            variant="outlined"
            name="last_name"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={formState.last_name}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            id="date"
            name="dob"
            label="Date Of Birth"
            type="date"
            fullWidth
            variant="outlined"
            defaultValue={formState.dob}
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
              value={formState.gender}
              onChange={(event) =>
                handleInputChange({
                  fieldName: event.target.name,
                  fieldValue: event.target.value,
                })
              }
            >
              {genders.map((gender) => (
                <FormControlLabel
                  key={gender.value}
                  value={gender.value}
                  control={<Radio required />}
                  label={gender.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Nationality"
            placeholder="Nationality"
            variant="outlined"
            name="nationality"
            fullWidth
            defaultValue={formState.nationality}
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
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Country"
            placeholder="Country"
            variant="outlined"
            name="country"
            fullWidth
            defaultValue={formState.country}
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
      </Grid>
    </>
  );
}
