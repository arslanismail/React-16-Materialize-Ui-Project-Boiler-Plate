import React, { useRef } from "react";
import Layout from "./components/layout/Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About";
import GenericNotFound from "./components/GenericNotFound";
import Contcat from "./components/Contact";
import { Box, Container } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Utility from "./utils/Utility";
import Card from "./components/layout/Card";

function App(props) {
  const classes = Utility.useAppStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [nextStep, setNextStep] = React.useState(true);
  const steps = Utility.getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const stepScreen = Utility.getStepContent(activeStep + 1);
    props.history.push(stepScreen);
  };

  const permitNextStep = () => {
    console.log("in the parent");
    setNextStep(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const stepScreen = Utility.getStepContent(activeStep - 1);
    props.history.push(stepScreen);
  };
  return (
    <React.Fragment>
      <Layout
        handleBack={handleBack}
        steps={steps}
        handleNext={handleNext}
        activeStep={activeStep}
      >
        <Card />
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props} permitNextStep={permitNextStep} />
              )}
            />
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contcat}></Route>
            <Route component={GenericNotFound} />
          </Switch>
        </div>
      </Layout>
      <React.Fragment>
        <div style={{ marginRight: "25%", float: "right", marginTop: "2%" }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            // className={classes.backButton}
          >
            Back
          </Button>
          <Button
            disabled={nextStep}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

const AppWithRouter = withRouter(App);
const AppContainer = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
};
export default AppContainer;
