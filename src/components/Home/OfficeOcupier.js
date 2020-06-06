import React from "react";
import Utility from "../../utils/Utility";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";

export default function OfficeOcupier(props) {
  const GreenCheckbox = Utility.GreenCheckbox;
  const classes = Utility.useFormStyles();
  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" className={classes.typo}>
        Registered Office Occupier
      </Typography>
      <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} />
      <Typography>
        Does the company occupy the premises listed above?
      </Typography>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="yes"
        style={{ marginLeft: "30%" }}
        onChange={props.permiseActionHandler}
      >
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
          labelPlacement="yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="no"
        />
      </RadioGroup>
      {props.isPermiseExists ? (
        ""
      ) : (
        <React.Fragment>
          <Typography
            style={{ marginTop: "3%", marginLeft: "30%", float: "left" }}
          >
            Please provide the name of occupier:
          </Typography>
          <TextField
            required
            id="Name"
            label="Enter Name"
            name="search"
            autoComplete="Text"
            style={{ float: "left", marginLeft: "30%" }}
          />
          <Typography
            style={{
              marginTop: "3%",
              marginBottom: "8%",
              marginLeft: "10%",
              float: "left",
            }}
          >
            <b>Please Confirm:</b>
            <GreenCheckbox name="checkedG" />{" "}
            <i>
              I declare that the occupier of the premises has consented in
              writing to the use of the specified address as the address of the
              registered office of the company and has not withdrawn that
              consent.
            </i>
          </Typography>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
