import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Utility from "../../utils/Utility";

export default function Card() {
  const classes = Utility.useCardStyles();
  return (
    <div>
      <AppBar position="static" className={classes.content}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Company Registration
          </Typography>

          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.barButton}
          >
            Save Application
          </Button>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className={classes.barButton}
          >
            Exit Application
          </Button>
        </Toolbar>

        <Toolbar>
          <Typography className={classes.title} noWrap>
            Company Name
          </Typography>
          <Typography variant="h6" noWrap>
            Reference Number [?] CA119901
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
