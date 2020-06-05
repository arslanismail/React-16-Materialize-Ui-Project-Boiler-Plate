import React from "react";
import logo from "./logo.svg";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import GenericNotFound from "./components/GenericNotFound";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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

function getSteps() {
  return [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];
}

function getStepContent(stepIndex) {
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

function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Router>
      <React.Fragment>
        <Layout>
          <Container style={{ marginTop: "10%" }}>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <Box style={{ marginTop: "10%" }}>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route component={GenericNotFound} />
              </Switch>
            </Box>
            <div className={classes.bottomButtons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </Container>
        </Layout>
      </React.Fragment>
    </Router>
  );
}

export default App;
