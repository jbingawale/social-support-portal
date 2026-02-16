import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveData, nextStep } from "../redux/formSlice";
import { useTranslation } from "react-i18next";

export default function Step1() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveData(data));
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={t("name")}
        {...register("name")}
        fullWidth
        margin="normal"
      />
      <TextField
        label={t("email")}
        {...register("email")}
        fullWidth
        margin="normal"
      />
      <TextField
        label={t("phone")}
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
