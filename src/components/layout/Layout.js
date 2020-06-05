import React from "react";
import Header from "./Header";
import Utility from "./../../utils/Utility";
import { Grid } from "@material-ui/core";

export default function Layout(props) {
  const classes = Utility.useLayoutStyles();
  return (
    <React.Fragment>
      <Header />
      <Grid xs={2}></Grid>
      <Grid xs={12}>
        <main className={classes.layout}>{props.children}</main>
      </Grid>
      <Grid xs={2}></Grid>
    </React.Fragment>
  );
}
