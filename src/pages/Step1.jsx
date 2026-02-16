import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveData, nextStep } from "../redux/formSlice";
import { useTranslation } from "react-i18next";

export default function Step1() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(saveData(data));
    dispatch(nextStep());
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Personal Information Form"
      role="form"
    >
      <TextField
        label={t("name")}
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Full Name",
          },
        }}
        fullWidth
        margin="normal"
      />

      <TextField
        label={t("email")}
        {...register("email", { required: "Email required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Email",
          },
        }}
        fullWidth
        margin="normal"
      />

      <TextField
        label={t("phone")}
        {...register("phone", { required: "Phone required" })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Phone",
          },
        }}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" aria-label="Go to next step">
        {t("next")}
      </Button>
    </form>
  );
}
