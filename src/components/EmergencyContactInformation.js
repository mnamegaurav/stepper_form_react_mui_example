import React from "react";
import {
  Grid,
  TextField,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  InputAdornment,
  Select,
  MenuItem,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";

import { useStore } from "../store";

export default function EmergencyContactInformation(props) {
  const { formState, handleInputChange } = props;

  const [state] = useStore();
  const { personTitles, yes_no_choices } = state;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Emergency contact name"
            placeholder="Emergency contact name"
            variant="outlined"
            name="emergency_name"
            defaultValue={formState.emergency_name}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select
                    name="emergency_salutation"
                    style={{ background: "transparent" }}
                    variant="standard"
                    size="small"
                    displayEmpty
                    value={formState.emergency_salutation || ""}
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
          <PhoneInput
            inputStyle={{
              font: "inherit",
              width: "100%",
              height: "1.1876em",
              margin: "0",
              display: "block",
              minWidth: "0",
              background: "transparent",
            }}
            inputProps={{
              required: true,
              label: "Emergency Mobile Number",
              name: "emergency_mobile",
            }}
            enableSearch
            specialLabel="Mobile Number"
            fullWidth
            country={"gb"}
            size="small"
            variant="outlined"
            value={formState.emergency_mobile}
            onChange={(value) =>
              handleInputChange({
                fieldName: "emergency_mobile",
                fieldValue: value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Address line 1"
            placeholder="Address line 1"
            variant="outlined"
            name="emergency_address_line_1"
            fullWidth
            defaultValue={formState.emergency_address_line_1}
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
            label="Address line 2"
            placeholder="Address line 2"
            variant="outlined"
            name="emergency_address_line_2"
            fullWidth
            defaultValue={formState.emergency_address_line_2}
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
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            id="date"
            name="emergency_dob"
            label="Date Of Birth"
            type="date"
            fullWidth
            variant="outlined"
            defaultValue={formState.emergency_dob}
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
            placeholder="Relationship"
            variant="outlined"
            name="emergency_relationship"
            fullWidth
            defaultValue={formState.emergency_relationship}
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
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="City"
            placeholder="City"
            variant="outlined"
            name="emergency_city"
            fullWidth
            defaultValue={formState.emergency_city}
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
        <Grid item xs={12} md={4}>
          <TextField
            size="small"
            label="State/Province"
            placeholder="State/Province"
            variant="outlined"
            name="emergency_state"
            fullWidth
            defaultValue={formState.emergency_state}
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
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="Postal/Zip Code"
            placeholder="Postal/Zip Code"
            variant="outlined"
            name="emergency_postcode"
            fullWidth
            defaultValue={formState.emergency_postcode}
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
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Is your Guarantor different from the emergency contact?
            </FormLabel>
            <RadioGroup
              row
              name="guarantor_different"
              value={
                formState.guarantor_different ||
                yes_no_choices[1].value
              }
              onChange={(event) =>
                handleInputChange({
                  fieldName: event.target.name,
                  fieldValue: event.target.value,
                })
              }
              required
            >
              {yes_no_choices.map((choice) => (
                <FormControlLabel
                  key={choice.value}
                  value={choice.value}
                  control={<Radio />}
                  label={choice.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
