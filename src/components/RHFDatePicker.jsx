import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function RHFDatePicker({ name, control, label, rules = {} }) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={null}
      render={({ field, fieldState }) => (
        <DatePicker
          label={label}
          value={field.value ? dayjs(field.value) : null}
          onChange={(date) =>
            field.onChange(date ? date.format("YYYY-MM-DD") : null)
          }
          slotProps={{
            textField: {
              fullWidth: true,
              margin: "normal",
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
        />
      )}
    />
  );
}
