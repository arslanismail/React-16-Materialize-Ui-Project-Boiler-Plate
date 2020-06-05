import React from "react";
import { Button } from "@material-ui/core";
import Utility from "./../utils/Utility";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export default function Home() {
  const classes = Utility.useFormStyles();
  return (
    <div className={classes.root}>
      
      <Typography component="h1" variant="h4" className={classes.typo}>
          Step 2:company Location
        </Typography>
        
        <Typography component="h1" variant="h6" className={classes.typo}>
          Register Office Address
        </Typography>
        <p>Must be a Physical Address in Australia. Not POBOX Address</p>
      <Button
        type="backButton"
        size="small"
        variant="contained"
        color="primary"
        className={classes.backButton}
      >
        Back to Address Search
      </Button>
      <form className={classes.form} noValidate>
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
