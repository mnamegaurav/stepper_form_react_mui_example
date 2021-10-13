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
import PhoneInput from "react-phone-input-2";

export default function EmergencyContactInformation(props) {
  const { formState, handleInputChange } = props;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            size="small"
            label="Emergency contact name"
            variant="outlined"
            name="emergencyContactName"
            defaultValue={formState.emergencyContactName}
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
            specialLabel="Emergency Mobile Number"
            placeholder="Emergency Mobile Number"
            required
            size="small"
            label="Emergency Mobile Number"
            variant="outlined"
            name="emergencyMobileNumber"
            value={formState.emergencyMobileNumber}
            onChange={(value) =>
              handleInputChange({
                fieldName: "emergencyMobileNumber",
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
            name="emergencyContactAddressLine1"
            fullWidth
            defaultValue={formState.emergencyContactAddressLine1}
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
            name="emergencyContactAddressLine2"
            fullWidth
            defaultValue={formState.emergencyContactAddressLine2}
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
            name="emergencyContactDob"
            label="Date Of Birth"
            type="date"
            fullWidth
            variant="outlined"
            defaultValue={formState.emergencyContactDob || new Date()}
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
            name="emergencyContactRelationship"
            fullWidth
            defaultValue={formState.emergencyContactRelationship}
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
            name="emergencyContactCity"
            fullWidth
            defaultValue={formState.emergencyContactCity}
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
            name="emergencyContactState"
            fullWidth
            defaultValue={formState.emergencyContactState}
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
            name="emergencyContactZip"
            fullWidth
            defaultValue={formState.emergencyContactZip}
            onChange={(event) =>
              handleInputChange({
                fieldName: event.target.name,
                fieldValue: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Is your Guarantor different from the emergency contact?
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              defaultValue={formState.isGuarantorDifferenceFromEmergencyContact}
              onChange={(event) =>
                handleInputChange({
                  fieldName: event.target.name,
                  fieldValue: event.target.value,
                })
              }
              required
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
