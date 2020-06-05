import React, { Component } from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));
export default function Layout(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <main className={classes.layout}>{props.children}</main>
    </React.Fragment>
  );
}
