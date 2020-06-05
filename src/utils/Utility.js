import { makeStyles } from "@material-ui/core/styles";
export default class Utility {
  static getSteps() {
    return [
      "Select master blaster campaign settings",
      "Create an ad group",
      "Create an ad",
    ];
  }

  static getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return "Select campaign settings...";
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  }

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
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  }));
}
