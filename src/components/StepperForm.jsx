import { useSelector } from "react-redux";
import Step1 from "../pages/step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import { Box, LinearProgress } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function StepperForm() {
  const step = useSelector((state) => state.form.step);

  const progress = (step / 3) * 100;

  return (
    <Box p={4} tabIndex={0} role="region" aria-label="Application Form">
      <LinearProgress variant="determinate" value={progress} />

      {step === 1 && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Step1 />
        </LocalizationProvider>
      )}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </Box>
  );
}
