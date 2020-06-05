import React from "react";
import { Button } from "@material-ui/core";
import Utility from "./../utils/Utility";
export default function Home() {
  const classes = Utility.useCardStyles();
  return (
    <React.Fragment>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Back to Address Search
      </Button>
    </React.Fragment>
  );
}
