import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Utility from "./../../utils/Utility";
import { Link } from "react-router-dom";

export default function Header() {
  const classes = Utility.useHeaderStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            Company name
          </Typography>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit">Start Now</Button>
          </Link>
          <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
