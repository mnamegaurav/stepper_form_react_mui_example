import React from "react";
import { Grid, TextField,InputAdornment,
Select,
MenuItem, } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";

import { useStore } from "../store";

export default function GuarantorInformation(props) {
  const { formState, handleInputChange } = props;

  const [state] = useStore()
  const {personTitles } = state

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
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
                    name="guarantor_salutation"
                    style={{ background: "transparent" }}
                    variant="standard"
                    size="small"
                    value={personTitles[0].value}
                    onChange={(event) =>
                      handleInputChange({
                        fieldName: event.target.name,
                        fieldValue: event.target.value,
                      })
                    }
                  >
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
            specialLabel="Guarantor Mobile Number"
            placeholder="Guarantor Mobile Number"
            required
            country={"gb"}
            size="small"
            label="Guarantor Mobile Number"
            variant="outlined"
            name="guarantor_mobile"
            value={formState.guarantor_mobile}
            onChange={(value) =>
              handleInputChange({
                fieldName: "guarantor_mobile",
                fieldValue: value,
              })
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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