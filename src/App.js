import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import GenericNotFound from "./components/GenericNotFound";
import { Box, Container } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Utility from "./utils/Utility";

function App() {
  const classes = Utility.useAppStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = Utility.getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
