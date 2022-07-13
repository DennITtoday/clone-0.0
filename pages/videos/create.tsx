import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/Step.Wrapper";
import MainLayout from "../../layouts/MainLayout";
import {
  Button,
  Card,
  Grid,
  TextField,
} from "../../node_modules/@mui/material/index";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [video, setVideo] = useState(null);

  // Нет ограничения по степам
  // Можно бесконечно кликать на некст и тогда там появляется пустота
  const Next = () => {
    setActiveStep((prev) => prev + 1);
  };

  const Back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            Step 1
            <TextField style={{ marginTop: 10 }} label={"Video name"} />
            <TextField style={{ marginTop: 10 }} label={"Author name"} />
          </Grid>
        )}

        {activeStep === 1 && (
          // По хорошему хотя бы выводить файл в консоль
          // дабы удостоверится что все воркает
          <FileUpload setFile={setVideo} accept="video/*">
            <Button>Upload Video</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid justify-content="space-between">
        <Button disabled={activeStep === 0} onClick={Back}>
          Back
        </Button>
        <Button onClick={Next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
