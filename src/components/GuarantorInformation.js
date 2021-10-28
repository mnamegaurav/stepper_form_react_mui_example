import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@material-ui/core";
import CustomPhoneInput from "./common/CustomPhoneInput";

import { useStore } from "../store";

export default function GuarantorInformation(props) {
  const { formState, handleInputChange } = props;

  const [state] = useStore();
  const { personTitles } = state;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required={formState.guarantor_different === "Yes"}
            size="small"
            label="Guarantor contact name"
            placeholder="Guarantor contact name"
            variant="outlined"
            name="guarantor_name"
            defaultValue={formState.guarantor_name}
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select
                    required={formState.guarantor_different === "Yes"}
                    name="guarantor_salutation"
                    style={{ background: "transparent" }}
                    variant="standard"
                    size="small"
                    displayEmpty
                    value={formState.guarantor_salutation || ""}
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
          <CustomPhoneInput
            required={formState.guarantor_different === "Yes"}
            size="small"
            variant="outlined"
            label="Guarantor Mobile Number"
            name="guarantor_mobile"
            placeholder="Guarantor Mobile Number"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formState.guarantor_mobile}
            onChange={(value) =>
              handleInputChange({
                fieldName: "guarantor_mobile",
                fieldValue: value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required={formState.guarantor_different === "Yes"}
            size="small"
            label="Address line 1"
            placeholder="Address line 1"
            variant="outlined"
            name="guarantor_address_line_1"
            fullWidth
            defaultValue={formState.guarantor_address_line_1}
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
            required={formState.guarantor_different === "Yes"}
            size="small"
            label="Address line 2"
            placeholder="Address line 2"
            variant="outlined"
            name="guarantor_address_line_2"
            fullWidth
            defaultValue={formState.guarantor_address_line_2}
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
            required={formState.guarantor_different === "Yes"}
            size="small"
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            id="date"
            name="guarantor_dob"
            label="Date Of Birth"
            type="date"
            fullWidth
            variant="outlined"
            defaultValue={formState.guarantor_dob}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required={formState.guarantor_different === "Yes"}
            size="small"
            label="Relationship"
            placeholder="Relationship"
            variant="outlined"
            name="guarantor_relationship"
            fullWidth
            defaultValue={formState.guarantor_relationship}
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
            required={formState.guarantor_different === "Yes"}
            size="small"
            label="City"
            placeholder="City"
            variant="outlined"
            name="guarantor_city"
            fullWidth
            defaultValue={formState.guarantor_city}
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
            name="guarantor_state"
            fullWidth
            defaultValue={formState.guarantor_state}
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
            required={formState.guarantor_different === "Yes"}
            size="small"
            label="Postal/Zip Code"
            placeholder="Postal/Zip Code"
            variant="outlined"
            name="guarantor_postcode"
            fullWidth
            defaultValue={formState.guarantor_postcode}
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
