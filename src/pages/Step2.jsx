import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { saveData, nextStep, prevStep } from "../redux/formSlice";
import { useTranslation } from "react-i18next";

export default function Step2() {
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
      aria-label="Family & Financial Infromation Form"
      role="form"
    >
      <TextField
        label={t("employment_status")}
        {...register("employment", {
          required: "Employment Status is required",
        })}
        error={!!errors.employment}
        helperText={errors.employment?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Employment Status",
          },
        }}
        fullWidth
        margin="normal"
      />
      <TextField
        label={t("monthly_income")}
        {...register("income", { required: "Monthly Income is required" })}
        error={!!errors.income}
        helperText={errors.income?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Monthly Income",
          },
        }}
        fullWidth
        margin="normal"
      />

      <Button onClick={() => dispatch(prevStep())} aria-label="Go to back step">
        {t("back")}
      </Button>
      <Button type="submit" variant="contained" aria-label="Go to next step">
        {t("next")}
      </Button>
    </form>
  );
}
