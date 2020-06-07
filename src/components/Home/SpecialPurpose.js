import React from "react";

import Utility from "../../utils/Utility";
import Typography from "@material-ui/core/Typography";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

export default function SpecialPurpose(props) {
  const GreenCheckbox = Utility.GreenCheckbox;
  const classes = Utility.useFormStyles();
  return (
    <React.Fragment>
      <div>
        {/* <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} /> */}
        <Typography component="h1" variant="h4" className={classes.typo}>
          Special Purpose
        </Typography>
        <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} />
        <Typography>Will this be a Superannuation Trustee Company?</Typography>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="no"
          style={{ marginLeft: "30%" }}
          onChange={props.superannuationTrusteeHandler}
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
        {props.isSuperannuationTrustee ? (
          <React.Fragment>
            <Typography
              style={{
                marginTop: "3%",
                marginBottom: "8%",
                float: "left",
              }}
            >
              <b>Please Confirm:</b>
              <GreenCheckbox name="checkedG" />{" "}
              <i>
                I declare that this company is a special purpose company as
                defined under Regulation 3 of the Corporations (Review Fees)
                Regulations 2003.
              </i>
            </Typography>
            <Card
              className={classes.root}
              style={{
                backgroundColor: "#D9EDF7",
                width: "80%",
                marginLeft: "15%",
                height: "20%",
                marginBottom: "2%",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h6">
                  When registering a company for the purpose of being a
                  superannuation trustee company:
                </Typography>
                <ul>
                  <li style={{ float: "left" }}>
                    The company must exist for the sole purpose of acting as a
                    trustee of a superannuation fund;
                  </li>
                  <li style={{ float: "left" }}>
                    The directors of the company must be the members of the
                    fund;
                  </li>
                  <li style={{ float: "left" }}>
                    The directors are not entitled to be remunerated;
                  </li>
                  <li style={{ float: "left", marginBottom: "3%" }}>
                    The directors are not entitled to be remunerated;
                  </li>
                </ul>
              </CardContent>
              {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
            </Card>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
}
