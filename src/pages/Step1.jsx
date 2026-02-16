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
    defaultValues: {
      gender: "",
      ...savedData,
    },
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
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
        margin="normal"
      />

      {/* NATIONAL ID */}
      <TextField
        label="National ID"
        {...register("nationalId", { required: "National ID required" })}
        error={!!errors.nationalId}
        helperText={errors.nationalId?.message}
        fullWidth
        margin="normal"
      />

      {/* DOB */}
      <RHFDatePicker
        name="dob"
        control={control}
        label="Date of Birth"
        rules={{ required: "DOB is required" }}
      />
      {/* GENDER */}

      <Controller
        name="gender"
        control={control}
        rules={{ required: "Select gender" }}
        render={({ field }) => (
          <TextField
            select
            label="Gender"
            fullWidth
            margin="normal"
            error={!!errors.gender}
            helperText={errors.gender?.message}
            {...field}
          >
            <MenuItem value="">Select Gender</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        )}
      />

      {/* ADDRESS */}
      <TextField
        label="Address"
        multiline
        rows={3}
        {...register("address", { required: "Address required" })}
        error={!!errors.address}
        helperText={errors.address?.message}
        fullWidth
        margin="normal"
      />

      {/* CITY */}
      <TextField
        label="City"
        {...register("city", { required: "City required" })}
        error={!!errors.city}
        helperText={errors.city?.message}
        fullWidth
        margin="normal"
      />

      {/* STATE */}
      <TextField
        label="State"
        {...register("state", { required: "State required" })}
        error={!!errors.state}
        helperText={errors.state?.message}
        fullWidth
        margin="normal"
      />

      {/* COUNTRY */}
      <TextField
        label="Country"
        {...register("country", { required: "Country required" })}
        error={!!errors.country}
        helperText={errors.country?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label={t("email")}
        {...register("email", { required: "Email required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
        margin="normal"
      />

      <TextField
        label={t("phone")}
        {...register("phone", { required: "Phone required" })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" aria-label="Go to next step">
        {t("next")}
      </Button>
    </form>
  );
}
