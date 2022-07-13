import React, { ReactNode } from "react";
import {
  Card,
  Container,
  Grid,
  Step,
  StepLabel,
  Stepper,
} from "../node_modules/@mui/material/index";

interface StepWrapperProps {
  activeStep: number;
  children: ReactNode;
}

const steps = ["Information about video", "Download"];
const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContend="center"
        style={{ margin: "90px 0", height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
