import React from "react";
import Header from "./Header";
import Utility from "./../../utils/Utility";

export default function Layout(props) {
  const classes = Utility.useLayoutStyles();
  return (
    <React.Fragment>
      <Header />
      <main className={classes.layout}>{props.children}</main>
    </React.Fragment>
  );
}
