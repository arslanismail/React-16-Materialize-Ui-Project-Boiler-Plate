import React from "react";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import Utility from "../../../utils/Utility";
import { Checkbox } from "@material-ui/core";
export default function AddressForm() {
  const classes = Utility.useFormStyles();
  return (
    <div>
      <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="care"
          label="Care of"
          name="care"
          autoComplete="Text"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="office"
          label="Office,Unit,Level"
          name="office"
          autoComplete="Text"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="address"
          label="Street Address"
          name="address"
          autoComplete="Text"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="state"
          label="state"
          name="state"
          autoComplete="Text"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="postCode"
          label="Postal Code"
          name="postCode"
          autoComplete="Text"
          autoFocus
        />

        <Typography component="h1" variant="h5" className={classes.typo}>
          Register Office Address
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="occupationName"
          label="Occoupation Name"
          name="occuopationName"
          autoComplete="Text"
          autoFocus
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="sample text is here"
        />

        <Typography component="h1" variant="h6" className={classes.typo}>
          Principle Place for Businuess
        </Typography>
        <p>Must be a Physical Address in Australia. Not POBOX Address</p>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="searchAddress"
          label="Search For Address"
          name="searchAddress"
          autoComplete="Text"
          autoFocus
        />
      </form>
    </div>
  );
}
