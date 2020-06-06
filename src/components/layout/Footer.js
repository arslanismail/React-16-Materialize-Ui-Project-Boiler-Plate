import React from "react";
import { Button } from "@material-ui/core";
export default function Footer(props) {
  return (
    <React.Fragment>
      <div style={{ marginRight: "25%", float: "right", marginTop: "2%" }}>
        <Button
          disabled={props.activeStep === 0}
          onClick={props.handleBack}
          // className={classes.backButton}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={props.handleNext}>
          {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </React.Fragment>
  );
}
