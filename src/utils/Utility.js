import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
export default class Utility {
  static getSteps() {
    return ["Home", "About", "Contact"];
  }

  static getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return "";
      case 1:
        return "ABOUT";
      case 2:
        return "CONTACT";
      default:
        return "";
    }
  }

  static useCardStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    content: {
      marginTop: "10%",
    },
    barButton: {
      marginLeft: "5%",
    },
  }));

  static useAppStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    bottomButtons: {
      position: "absolute",
      width: "50%",
      bottom: "5%",
      right: "20px",
    },
  }));

  static useHeaderStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#043CFF",
    },
  }));
  static useLayoutStyles = makeStyles((theme) => ({
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  }));

  static GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  static useFormStyles = makeStyles((theme) => ({
    form: {
      width: "50%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    backButton: {
      width: "25%",
      margin: theme.spacing(3, 0, 2),
    },

    typo: {
      color: "#303F9F",
      marginTop: "8%",
    },
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));
}
