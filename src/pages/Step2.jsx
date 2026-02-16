import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveData, nextStep, prevStep } from "../redux/formSlice";

export default function Step2() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveData(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Employment Status"
        {...register("employment")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Monthly Income"
        {...register("income")}
        fullWidth
        margin="normal"
      />

      <Button onClick={() => dispatch(prevStep())}>Back</Button>
      <Button type="submit" variant="contained">
        Next
      </Button>
    </form>
  );
}
