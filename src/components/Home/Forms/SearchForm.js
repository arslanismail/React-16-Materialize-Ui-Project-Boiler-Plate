import React from "react";
import { TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Utility from "../../../utils/Utility";
import { Button } from "@material-ui/core";
export default function SearchForm(props) {
  const classes = Utility.useFormStyles();
  return (
    <div>
      <form style={{marginBottom:"3%"}}>
        <TextField
          required
          id="search"
          label="Search Address"
          name="search"
          autoComplete="Text"
          autoFocus
          style={{ paddingRight: "2%",marginBottom:"5%" }}
          onChange={props.handleSeachField}
        />

        <Button
          type="submit"
          disabled={props.isDisabled}
          variant="contained"
          size="large"
          color="primary"
          className={classes.submit}
          onClick={props.submitSearch}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
