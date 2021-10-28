import React from "react";
import { Grid, TextField } from "@material-ui/core";
import CustomPhoneInput from "./common/CustomPhoneInput";

export default function ContactInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="small"
            label="Email"
            placeholder="Email"
            variant="outlined"
            name="email"
            type="email"
            defaultValue={formState.email}
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
        <Grid item xs={12} md={6}>
          <CustomPhoneInput
            required
            size="small"
            variant="outlined"
            label="Mobile Number"
            name="mobile_number"
            placeholder="Mobile Number"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formState.mobile_number}
            onChange={(value) =>
              handleInputChange({
                fieldName: "mobile_number",
                fieldValue: value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            size="small"
            label="Telephone/Home No."
            placeholder="Telephone/Home No."
            variant="outlined"
            name="home_number"
            type="tel"
            fullWidth
            defaultValue={formState.home_number}
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
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="small"
            label="Address line 1"
            placeholder="Address line 1"
            variant="outlined"
            name="address_line_1"
            fullWidth
            defaultValue={formState.address_line_1}
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
        <Grid item xs={12} md={12}>
          <TextField
            required
            size="small"
            label="Address line 2"
            placeholder="Address line 2"
            variant="outlined"
            name="address_line_2"
            fullWidth
            defaultValue={formState.address_line_2}
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
            name="city"
            fullWidth
            defaultValue={formState.city}
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
            name="state"
            fullWidth
            defaultValue={formState.state}
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
            name="postcode"
            fullWidth
            defaultValue={formState.postcode}
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
