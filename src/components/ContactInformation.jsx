import React from "react";
import { Grid, TextField } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";

export default function ContactInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Email"
            variant="outlined"
            name="email"
            defaultValue={formState.email}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
            fullWidth
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
            specialLabel="Mobile Number"
            required
            placeholder="Mobile Number"
            size="small"
            label="Mobile Number"
            variant="outlined"
            name="mobileNumber"
            fullWidth
            value={formState.mobileNumber}
            onChange={(value) =>
              handleInputChange({
                fieldName: "mobileNumber",
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
            variant="outlined"
            name="addressLine1"
            fullWidth
            defaultValue={formState.addressLine1}
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
            label="Address line 2"
            variant="outlined"
            name="addressLine2"
            fullWidth
            defaultValue={formState.addressLine2}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="City"
            variant="outlined"
            name="city"
            fullWidth
            defaultValue={formState.city}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="State/Province"
            variant="outlined"
            name="state"
            fullWidth
            defaultValue={formState.state}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            size="small"
            label="Postal / Zip Code"
            variant="outlined"
            name="zip"
            fullWidth
            defaultValue={formState.zip}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
