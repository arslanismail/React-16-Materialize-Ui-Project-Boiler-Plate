import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [signUp,setSignUp] = React.useState({
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    contact:null,
    extraEmail:null,

  })
  const handleFirstName = (e) => {
    setSignUp({
      ...signUp,
      firstName: e.target.value,
    });
    
  };
  const handleEmail = (e) => {
    setSignUp({
      ...signUp,
      lastName: e.target.value,
    });
    
  };
  const handleLastName = (e) => {
    setSignUp({
      ...signUp,
      lastName: e.target.value,
    });
    
  };

  const handleContact = (e) => {
    setSignUp({
      ...signUp,
      contact: e.target.value,
    });
    
  };
  const handlePassword = (e) => {
    setSignUp({
      ...signUp,
      password: e.target.value,
    });
    
  };

  const handleExtraEmail = (e) => {
    setSignUp({
      ...signUp,
      extraEmail: !signUp.remember,
    });
  }
  const classes = useStyles();
  const handleSubmitClick = (e) => {
    const condition =
      signUp.firstName != null &&
      signUp.lastName !=null &&
      signUp.contact != null &&
      signUp.password != null &&
      signUp.email != null;
    if (condition) {
      console.log(e);
    }else{console.log("not re")}
  };

  return (
    <Container component="main" maxWidth="xs" style={{backgroundColor:"#B6B3A6"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleFirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleLastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contact"
                label="Contact Number"
                name="contact"
                autoComplete="contact"
                onChange={handleContact}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" onChange={handleExtraEmail} name="extraEmail" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end" style={{marginBottom:"5%"}}>
            <Grid item>
              <Link to="/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
