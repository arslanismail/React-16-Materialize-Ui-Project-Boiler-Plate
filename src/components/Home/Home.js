import React from "react";
import { Button } from "@material-ui/core";
import Utility from "../../utils/Utility";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./Forms/AddressForm";
import SearchForm from "./Forms/SearchForm";
import SpecialPurpose from "./SpecialPurpose";
import OfficeOcupier from "./OfficeOcupier";

export default function Home(props) {
  const classes = Utility.useFormStyles();
  const [options, setOptions] = React.useState({
    addressSearchValue: "",
    addressSearchStatus: false,
    isPermiseExists: true,
    isSuperannuationTrustee: false,
    homeStepComplete: false,
    officeUnitLevel: null,
    streetAdderss: null,
    state: null,
    suburb: null,
  });

  const handleSuburb = (e) => {
    setOptions({
      ...options,
      suburb: e.target.value,
    });
    permitStep();
  };

  const handleStreetAddress = (e) => {
    setOptions({
      ...options,
      streetAdderss: e.target.value,
    });
    permitStep();
  };

  const handleState = (e) => {
    setOptions({
      ...options,
      state: e.target.value,
    });
    permitStep();
  };

  const handleUnit = (e) => {
    setOptions({
      ...options,
      officeUnitLevel: e.target.value,
    });
    permitStep();
  };
  const handleSeachField = (e) => {
    setOptions({
      ...options,
      addressSearchValue: e.target.value,
    });
  };
  const clearSearch = () => {
    setOptions({
      ...options,
      addressSearchStatus: false,
    });
  };
  const permitStep = () => {
    const condition =
      options.suburb != null &&
      options.addressSearchStatus &&
      options.state != null &&
      options.officeUnitLevel != null &&
      options.streetAdderss != null;
    if (condition) {
      props.permitNextStep();
    }
  };
  const permiseActionHandler = (e) => {
    setOptions({
      ...options,
      isPermiseExists: !options.isPermiseExists,
    });
  };

  const superannuationTrusteeHandler = (e) => {
    setOptions({
      ...options,
      isSuperannuationTrustee: !options.isSuperannuationTrustee,
    });
  };
  const submitSearch = (e) => {
    e.preventDefault();
    permitStep();
    //  Search In Api .......
    setOptions({
      ...options,
      addressSearchStatus: true,
    });
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Typography component="h1" variant="h4" className={classes.typo}>
        Company Location
      </Typography>
      <Typography component="h1" variant="h6" className={classes.typo}>
        Register Office Address
      </Typography>
      <p>Must be a Physical Address in Australia. Not POBOX Address</p>
      {!options.addressSearchStatus ? (
        <SearchForm
          handleSeachField={(e) => handleSeachField(e)}
          submitSearch={(e) => submitSearch(e)}
          isDisabled={options.addressSearchValue === "" ? true : false}
        />
      ) : (
        <React.Fragment>
          <Button
            type="backButton"
            size="small"
            variant="contained"
            color="primary"
            className={classes.backButton}
            onClick={clearSearch}
          >
            Back to Address Search
          </Button>
          <AddressForm
            suburbActionHandler={(e) => handleSuburb(e)}
            stateActionHandler={(e) => handleState(e)}
            unitActionHandler={(e) => handleUnit(e)}
            streetActionHandler={(e) => handleStreetAddress(e)}
          />
        </React.Fragment>
      )}
      <OfficeOcupier
        isPermiseExists={options.isPermiseExists}
        permiseActionHandler={(e) => permiseActionHandler(e)}
      />
      <SpecialPurpose
        isSuperannuationTrustee={options.isSuperannuationTrustee}
        superannuationTrusteeHandler={superannuationTrusteeHandler}
      />
    </div>
  );
}
