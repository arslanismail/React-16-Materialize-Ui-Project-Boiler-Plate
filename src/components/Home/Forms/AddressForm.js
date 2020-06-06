import React from "react";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import Utility from "../../../utils/Utility";
import { Checkbox } from "@material-ui/core";
export default function AddressForm(props) {
  const classes = Utility.useFormStyles();
  return (
    <div>
      <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="office"
          label="Office,Unit,Level"
          name="office"
          autoComplete="Text"
          onChange={props.unitActionHandler}
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
          onChange={props.streetActionHandler}
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
          onChange={props.stateActionHandler}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="suburb"
          label="Suburb"
          name="suburb"
          onChange={props.suburbActionHandler}
          autoComplete="Text"
          autoFocus
        />
      </form>
    </div>
  );
}
