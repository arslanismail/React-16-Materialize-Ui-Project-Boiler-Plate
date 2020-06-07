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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const [signIn,setSignIn] = React.useState({
    email:null,
    password:null,
    remember:false,
   
  });

  const handleEmail = (e) => {
    console.log(e.target.value)
    setSignIn({
      signIn,
      email: e.target.value,
    });
    
  };
  const handleRemember = (e) => {
    setSignIn({
      ...signIn,
      remember: !signIn.remember,
    });
    
  };

  const handlePassword = (e) => {
    
    setSignIn({
      signIn,
      password: e.target.value,
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if( signIn.password=="asad"  ) {
        console.log("login")
    } else {
      console.log("invalid login data")
       console.log(signIn.password)
       console.log(handleEmail)
       console.log(signIn.email)
       
    }
}
  
  // const handleLogin = () =>{
  //   axios.post('http://localhost:3000/signin', { email: {handleEmail}, password: {handlePassword} });
  // };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" style={{backgroundColor:"#B6B3A6"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={signIn.email}
            onChange={handleEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={signIn.password}
            onChange={handlePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" onChange={handleRemember} name="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Sign In
          </Button>
          <Grid container style={{marginBottom:"5%"}}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
