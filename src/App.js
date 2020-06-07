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
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Utility from "./utils/Utility";
import Card from "./components/layout/Card";
import SignIn from "./components/Account/SignIn";
import SignUp from "./components/Account/Signup";

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
    setNextStep(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const stepScreen = Utility.getStepContent(activeStep - 1);
    props.history.push(stepScreen);
  };
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "rgb(104, 109, 89)" }}>
        <Layout
          handleBack={handleBack}
          steps={steps}
          handleNext={handleNext}
          activeStep={activeStep}
          conditionalRender={props.location.pathname}
        >
          {props.location.pathname === "/signin" ||
          props.location.pathname === "/signup" ? (
            ""
          ) : (
            <React.Fragment>
              <Card />
              <div
                className={classes.root}
                style={{ backgroundColor: "#B6B3A6" }}
              >
                <Stepper
                  activeStep={activeStep}
                  style={{ backgroundColor: "#B6B3A6" }}
                  alternativeLabel
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </React.Fragment>
          )}

          <div>
            <Switch>
              {props.location.pathname === "/" ? (
                <div style={{ backgroundColor: "#B6B3A6" }}>
                  <Route
                    path="/"
                    exact
                    render={(props) => (
                      <Home {...props} permitNextStep={permitNextStep} />
                    )}
                  />
                </div>
              ) : (
                ""
              )}

              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contcat}></Route>
              <Route path="/signin" component={SignIn}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route component={GenericNotFound} />
            </Switch>
          </div>
        </Layout>
        {props.location.pathname === "/signin" ||
        props.location.pathname === "/signup" ? (
          ""
        ) : (
          <React.Fragment>
            <div
              style={{
                marginRight: "20%",
                float: "right",
                backgroundColor: "lightgrey",
                marginTop: "1%",
                marginBottom: "2%",
              }}
            >
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
        )}
      </div>
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
