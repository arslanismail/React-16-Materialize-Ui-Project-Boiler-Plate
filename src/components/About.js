import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Utility from './../utils/Utility';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import { Typography } from '@material-ui/core';




export default function About() {
  const classes = Utility.useAboutStyle();

  return (
    <div>
      <Typography component="h1" variant="h4" style={{marginTop:"5%"}} className={classes.typo}>
      Step 3: Company Entities
      </Typography>
      <hr style={{marginBottom:"4%"}}/>
      <div className={classes.root}>
      <Paper elevation={3} style={{width:"40%",marginLeft:"10%"}} ><AccountCircleIcon style={{fontSize: 100,marginLeft:"35%",marginTop:"5%"}}> </AccountCircleIcon></Paper>
      <Paper elevation={3} style={{width:"40%"}} ><BusinessIcon style={{fontSize: 100,marginLeft:"35%",marginTop:"5%"}}> </BusinessIcon></Paper>
    
    </div></div>
  );
}