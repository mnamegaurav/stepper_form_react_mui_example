import React from "react";
import { Grid, TextField } from "@material-ui/core";
import PhoneInput from "react-phone-input-2";

export default function GuarantorInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Guarantor contact name"
            variant="outlined"
            name="guarantorContactName"
            defaultValue={formState.guarantorContactName}
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
            specialLabel="Guarantor Mobile Number"
            placeholder="Guarantor Mobile Number"
            required
            country={"us"}
            size="small"
            label="Guarantor Mobile Number"
            variant="outlined"
            name="guarantorMobileNumber"
            value={formState.guarantorMobileNumber}
            onChange={(value) =>
              handleInputChange({
                fieldName: "guarantorMobileNumber",
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
            variant="outlined"
            name="guarantorContactAddressLine1"
            fullWidth
            defaultValue={formState.guarantorContactAddressLine1}
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
            name="guarantorContactAddressLine2"
            fullWidth
            defaultValue={formState.guarantorContactAddressLine2}
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
            name="guarantorContactDob"
            label="Date Of Birth"
            type="date"
            fullWidth
            variant="outlined"
            defaultValue={formState.guarantorContactDob || new Date()}
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
            variant="outlined"
            name="guarantorContactRelationship"
            fullWidth
            defaultValue={formState.guarantorContactRelationship}
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
            name="guarantorContactCity"
            fullWidth
            defaultValue={formState.guarantorContactCity}
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
            name="guarantorContactState"
            fullWidth
            defaultValue={formState.guarantorContactState}
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
            name="guarantorContactZip"
            fullWidth
            defaultValue={formState.guarantorContactZip}
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
