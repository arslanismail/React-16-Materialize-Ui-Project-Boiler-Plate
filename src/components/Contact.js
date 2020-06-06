import React from "react";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import Utility from './../utils/Utility';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
export default function Contact() {
  const GreenCheckbox = Utility.GreenCheckbox;
  const classes = Utility.useFormStyles();
  return (
    <React.Fragment>
      <div>
       <Typography  component="h1" variant="h4" style={{marginLeft: "30%"}} className={classes.typo}>
       Add an Individual
      </Typography>
     <hr style={{ marginTop: "1%", marginBottom: "3%", width: "80%" }} />
      <Typography  component="h1" variant="h6" style={{marginTop: "4%",marginLeft: "30%"}} className={classes.typo}>
      Personal Details
      </Typography>
      
          
      <TextField
            required
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="Text"
            style={{ float: "left", marginLeft: "30%",marginTop:"2%",marginBottom:"3%",width:"40%" }}
          />
           <TextField
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="Text"
            style={{ float: "left", marginLeft: "30%",marginTop:"2%",marginBottom:"3%",width:"40%" }}
          />
           <TextField
            required
            id="middleName"
            label="Middle Name"
            name="middleName"
            autoComplete="Text"
            style={{ float: "left", marginLeft: "30%",marginTop:"2%",marginBottom:"3%",width:"40%" }}
          />
          </div>
          <div>
          <Typography component="h1" variant="h4" className={classes.typo}>
          Role(s) in Company
      </Typography>
      <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} />
          
          <Typography
            style={{
              marginTop: "3%",
              marginBottom: "10%",
              marginLeft: "10%",
              float: "left",
            }}
          >
            <b>Please Confirm:</b>
            </Typography>
            <GreenCheckbox name="director" style={{marginleft:"100%"}}/>{" "}
            <i>
              Director
            </i><br/>
            <GreenCheckbox name="secretary" style={{marginleft:"30%"}}/>{" "}
            <i>
            Secretary
            </i><br/>
            <GreenCheckbox name="shareHolder" style={{marginleft:"30%"}}/>{" "}
            <i>
            Shareholder
            </i><br/>
            <GreenCheckbox name="publicOffice"  style={{marginleft:"30%"}}/>{" "}
            <i>
            Public Officer
            </i>
            <br/><GreenCheckbox name="applicant"  style={{marginleft:"30%"}}/>{" "}
            <i>
            Applicant
            </i><br/>
            <Typography component="h1" variant="h4" className={classes.typo}>
        Former Name
      </Typography>
      <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} />
      <Typography>
      Does this person have a former name?
      </Typography>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="yes"
        style={{ marginLeft: "30%" }}
        // onChange={props.permiseActionHandler}
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
     

          
          
          </div>
        </React.Fragment>
  );
}
