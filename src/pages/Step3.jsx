import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import AIHelpModal from "../components/AIHelpModal";
import { generateText } from "../services/openaiService";
import { submitApplication } from "../services/apiService";
import { saveData, prevStep } from "../redux/formSlice";
import { TextField, Button, CircularProgress } from "@mui/material";

export default function Step3() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const savedData = useSelector((state) => state.form.data);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: savedData,
  });

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [aiText, setAiText] = useState("");
  const [currentField, setCurrentField] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleAI = async (fieldName, prompt) => {
    setLoading(true);
    setCurrentField(fieldName);

    try {
      const text = await generateText(prompt);
      setAiText(text);
      setOpenModal(true);
    } catch {
      alert("AI failed. Try again.");
    }

    setLoading(false);
  };

  // FINAL SUBMIT HANDLER
  const onSubmit = async (data) => {
    setSubmitting(true);

    // Save Step3 data into Redux
    dispatch(saveData(data));

    // Merge all data
    const finalData = { ...savedData, ...data };

    await submitApplication(finalData);

    alert("Application Submitted Successfully!");

    setSubmitting(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} role="form">
        <TextField
          label={t("financial_situation")}
          {...register("situation", {
            required: t("financial_situation_required"),
          })}
          error={!!errors.situation}
          helperText={errors.situation?.message}
          multiline
          rows={4}
          fullWidth
          sx={{ mt: 3 }}
        />

        <Button
          onClick={() => handleAI("situation", "Describe financial hardship")}
        >
          {loading ? <CircularProgress size={20} /> : t("help_write")}
        </Button>

        <TextField
          label={t("employment_circumstances")}
          {...register("employmentDesc", {
            required: t("financial_situation_required"),
          })}
          error={!!errors.employmentDesc}
          helperText={errors.employmentDesc?.message}
          multiline
          rows={4}
          fullWidth
          sx={{ mt: 3 }}
        />

        <Button
          onClick={() =>
            handleAI("employmentDesc", "Describe employment struggles")
          }
        >
          {loading ? <CircularProgress size={20} /> : t("help_write")}
        </Button>

        <TextField
          label={t("reason_applying")}
          {...register("reason", { required: t("reason_applying_required") })}
          error={!!errors.reason}
          helperText={errors.reason?.message}
          multiline
          rows={4}
          fullWidth
          sx={{ mt: 3 }}
        />

        <Button
          onClick={() =>
            handleAI("reason", "Explain why financial help is needed")
          }
        >
          {loading ? <CircularProgress size={20} /> : t("help_write")}
        </Button>

        <AIHelpModal
          open={openModal}
          aiText={aiText}
          onClose={() => setOpenModal(false)}
          onAccept={(text) => setValue(currentField, text)}
        />

        {/* FINAL SUBMIT BUTTON */}
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
            sx={{ mt: 3 }}
          >
            {t("back")}
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={submitting}
            sx={{ mt: 3 }}
          >
            {submitting ? t("submitting_application") : t("submit_application")}
          </Button>
        </div>
      </form>
    </>
  );
}
