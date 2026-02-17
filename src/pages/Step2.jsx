import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { saveData, nextStep, prevStep } from "../redux/formSlice";
import { useTranslation } from "react-i18next";

export default function Step2() {
  const { t } = useTranslation();
  const savedData = useSelector((state) => state.form.data);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: savedData,
  });
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
      {/* Marital Status */}
      <Controller
        name="maritalStatus"
        control={control}
        defaultValue=""
        rules={{ required: t("marital_status_required") }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={t("marital_status")}
            error={!!errors.maritalStatus}
            helperText={errors.maritalStatus?.message}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">{t("select")}</MenuItem>
            <MenuItem value="single">{t("single")}</MenuItem>
            <MenuItem value="married">{t("married")}</MenuItem>
            <MenuItem value="divorced">{t("divorced")}</MenuItem>
          </TextField>
        )}
      />

      {/* Dependents */}
      <TextField
        type="number"
        label={t("dependents")}
        {...register("dependents", {
          required: t("dependents_required"),
        })}
        error={!!errors.dependents}
        helperText={errors.dependents?.message}
        fullWidth
        margin="normal"
      />

      {/* Employment Status */}
      <Controller
        name="employmentStatus"
        control={control}
        defaultValue=""
        rules={{ required: t("employment_status_required") }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={t("employment_status")}
            error={!!errors.employmentStatus}
            helperText={errors.employmentStatus?.message}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">{t("select")}</MenuItem>
            <MenuItem value="employed">{t("employed")}</MenuItem>
            <MenuItem value="self-employed">{t("self_employed")}</MenuItem>
            <MenuItem value="unemployed">{t("unemployed")}</MenuItem>
            <MenuItem value="student">{t("student")}</MenuItem>
          </TextField>
        )}
      />

      {/* Monthly Income */}
      <TextField
        type="number"
        label={t("monthly_income")}
        {...register("monthlyIncome", {
          required: t("monthly_income_required"),
        })}
        error={!!errors.monthlyIncome}
        helperText={errors.monthlyIncome?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Monthly Income",
          },
        }}
        fullWidth
        margin="normal"
      />

      {/* Housing Status */}
      <Controller
        name="housingStatus"
        control={control}
        defaultValue=""
        rules={{ required: t("housing_status_required") }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label={t("housing_status")}
            error={!!errors.housingStatus}
            helperText={errors.housingStatus?.message}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">{t("select")}</MenuItem>
            <MenuItem value="own">{t("own")}</MenuItem>
            <MenuItem value="rent">{t("rent")}</MenuItem>
            <MenuItem value="family">{t("living_with_family")}</MenuItem>
          </TextField>
        )}
      />

      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 24,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => dispatch(prevStep())}
          aria-label="Go to back step"
        >
          {t("back")}
        </Button>
        <Button type="submit" variant="contained" aria-label="Go to next step">
          {t("next")}
        </Button>
      </div>
    </form>
  );
}
