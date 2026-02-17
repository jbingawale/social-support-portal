import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { saveData, nextStep } from "../redux/formSlice";
import { useTranslation } from "react-i18next";
import RHFDatePicker from "../components/RHFDatePicker";

export default function Step1() {
  const { t } = useTranslation();
  const savedData = useSelector((state) => state.form.data);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: savedData,
  });

  useEffect(() => {
    if (savedData) {
      reset(savedData);
    }
  }, [savedData, reset]);

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
        {...register("name", { required: t("name_required") })}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
        margin="normal"
      />

      {/* NATIONAL ID */}
      <TextField
        label={t("national_id")}
        {...register("nationalId", {
          required: t("national_id_required"),
          pattern: {
            value: /^784-\d{4}-\d{7}-\d{1}$/,
            message: t("invalid_national_id"),
          },
        })}
        error={!!errors.nationalId}
        helperText={errors.nationalId?.message}
        fullWidth
        margin="normal"
      />

      {/* DOB */}
      <RHFDatePicker
        name="dob"
        control={control}
        label={t("dob")}
        rules={{ required: t("dob_required") }}
      />
      {/* GENDER */}

      <Controller
        name="gender"
        control={control}
        rules={{ required: t("gender_required") }}
        render={({ field }) => (
          <TextField
            select
            label={t("gender")}
            fullWidth
            margin="normal"
            error={!!errors.gender}
            helperText={errors.gender?.message}
            {...field}
          >
            <MenuItem value="">{t("select_gender")}</MenuItem>
            <MenuItem value="male">{t("male")}</MenuItem>
            <MenuItem value="female">{t("female")}</MenuItem>
            <MenuItem value="other">{t("other")}</MenuItem>
          </TextField>
        )}
      />

      {/* ADDRESS */}
      <TextField
        label={t("address")}
        multiline
        rows={3}
        {...register("address", { required: t("address_required") })}
        error={!!errors.address}
        helperText={errors.address?.message}
        fullWidth
        margin="normal"
      />

      {/* CITY */}
      <TextField
        label={t("city")}
        {...register("city", { required: t("city_required") })}
        error={!!errors.city}
        helperText={errors.city?.message}
        fullWidth
        margin="normal"
      />

      {/* STATE */}
      <TextField
        label={t("state")}
        {...register("state", { required: t("state_required") })}
        error={!!errors.state}
        helperText={errors.state?.message}
        fullWidth
        margin="normal"
      />

      {/* COUNTRY */}
      <TextField
        label={t("country")}
        {...register("country", { required: t("country_required") })}
        error={!!errors.country}
        helperText={errors.country?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label={t("email")}
        {...register("email", { required: t("email_required") })}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label={t("phone")}
        {...register("phone", { required: t("phone_required") })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        fullWidth
        margin="normal"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: 24,
        }}
      >
        <Button type="submit" variant="contained" aria-label="Go to next step">
          {t("next")}
        </Button>
      </div>
    </form>
  );
}
