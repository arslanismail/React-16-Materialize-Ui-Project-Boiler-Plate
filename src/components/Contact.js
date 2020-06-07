import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import Utility from './../utils/Utility';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import SearchForm from './Home/Forms/SearchForm';
import AddressForm from './Home/Forms/AddressForm';
export default function Contact(props) {
  const GreenCheckbox = Utility.GreenCheckbox;
  const classes = Utility.useFormStyles();
  const [checkBox,setcheckBox]= React.useState({isDirectorChecked:false,isApplicantChecked:false})
  const [radioOptions,setRadioOptions]=React.useState(['Director','Applicant']);
  const [options, setOptions] = React.useState({
    addressSearchValue: "",
    addressSearchStatus: false,
    isPermiseExists: true,
    isSuperannuationTrustee: false,
    homeStepComplete: false,
    firstName: null,
    middleNmae: null,
    lastName: null,
    suburb: null,
  });

  const handleSeachField = (e) => {
    setOptions({
      ...options,
      addressSearchValue: e.target.value,
    });
  };
  const handleSuburb = (e) => {
    console.log(e.target.value)
    setOptions({
      ...options,
      suburb: e.target.value,
    });
  }
  const clearSearch = () => {
    setOptions({
      ...options,
      addressSearchStatus: false,
    });
  };
  const submitSearch = (e) => {
    e.preventDefault();
    permitStep();
    //  Search In Api .......
    setOptions({
      ...options,
      addressSearchStatus: true,
    });
  };
  const handleState = (e) => {
    setOptions({
      ...options,
      state: e.target.value,
    });
    permitStep();
  };
  const handleUnit = (e) => {
    setOptions({
      ...options,
      officeUnitLevel: e.target.value,
    });
    permitStep();
  };
  const handleStreetAddress = (e) => {
    setOptions({
      ...options,
      streetAdderss: e.target.value,
    });
    permitStep();
  };
  const permitStep = () => {
    const condition =
      options.suburb != null &&
      options.addressSearchStatus &&
      options.state != null &&
      options.officeUnitLevel != null &&
      options.streetAdderss != null;
    if (condition) {
      props.permitNextStep();
    }
  };
 const toggleDirectorCheck = ()=>{
    setcheckBox((prevState)=>{
      return {
        ...prevState,
        isDirectorChecked: ! prevState.isDirectorChecked
      }

    })
  }

  return (
    <React.Fragment>
      <div style={{backgroundColor:"#B6B3A6"}}>
        <div>
       <Typography  component="h1" variant="h4" style={{marginLeft: "30%"}} className={classes.typo}>
       Add an Individual
      </Typography>
     <hr style={{ marginTop: "1%", marginBottom: "3%", width: "80%" }} />
      <Typography  component="h1" variant="h6" style={{marginTop: "4%",marginLeft: "30%"}} className={classes.typo}>
      Personal Details
      </Typography>
      {checkBox.isDirectorChecked ? (<h1>its true</h1>) : (<h1>it's false</h1>)}
          
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
          
      </Typography>
      <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} />
      <Typography>
      <b style={{marginLeft:"5%"}}>Please Confirm:</b>
      </Typography>
      <div style={{marginLeft:"20%"}}>
        {radioOptions.map((option)=>{
         return (
           <React.Fragment>
          <GreenCheckbox  onChange={toggleDirectorCheck} name="director" style={{marginleft:"100%"}}/>
          <i>
            {option}
          </i><br/>
          </React.Fragment>
         
         ) 
        })}
           
            </div>
            <Typography component="h1" variant="h4" style={{marginLeft:"5%"}} className={classes.typo}>
        Former Name
      </Typography>
      <hr style={{ marginTop: "3%", marginBottom: "3%", width: "80%" }} />
      <Typography style={{marginLeft:"5%"}}>
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
     
<div style={{marginLeft:"25%",marginBottom:"15%"}}>
      <Typography component="h1" variant="h4" className={classes.typo}>
      Company Location
    </Typography>
    <Typography component="h1" variant="h6" className={classes.typo}>
      Register Office Address
    </Typography>
    <p className={classes.typo}>Must be a Physical Address in Australia. Not POBOX Address</p>
    {!options.addressSearchStatus ? (
      <SearchForm
        handleSeachField={(e) => handleSeachField(e)}
        submitSearch={(e) => submitSearch(e)}
        isDisabled={options.addressSearchValue === "" ? true : false}
      />
    ) : (
      <React.Fragment>
        <Button
          type="backButton"
          size="small"
          variant="contained"
          color="primary"
          className={classes.backButton}
          onClick={clearSearch}
          style={{marginLeft:"40%"}}
        >
          Back to Address Search
        </Button>
        <AddressForm
          suburbActionHandler={(e) => handleSuburb(e)}
          stateActionHandler={(e) => handleState(e)}
          unitActionHandler={(e) => handleUnit(e)}
          streetActionHandler={(e) => handleStreetAddress(e)}
        />
      </React.Fragment>
      
    )}
          </div>
          </div>
          </div>
        </React.Fragment>
  );
}