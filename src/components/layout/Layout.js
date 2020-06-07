import React from "react";
import Header from "./Header";
import Utility from "./../../utils/Utility";
import { Grid, Paper } from "@material-ui/core";
import Footer from "./Footer";

export default function Layout(props) {
  const classes = Utility.useLayoutStyles();
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={6}>
        <Grid xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid xs={12}>
          <main className={classes.layout}>{props.children}</main>
        </Grid>
        <Grid xs={2}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
