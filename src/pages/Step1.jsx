import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveData, nextStep } from "../redux/formSlice";

export default function Step1() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveData(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Name" {...register("name")} fullWidth margin="normal" />
      <TextField
        label="Email"
        {...register("email")}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        {...register("phone")}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained">
        Next
      </Button>
    </form>
  );
}
