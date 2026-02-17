import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { saveData, prevStep, resetForm } from "../redux/formSlice";
import { TextField, Button, CircularProgress } from "@mui/material";

import AIHelpModal from "../components/AIHelpModal";
import SuccessModal from "../components/SuccessModal";
import { generateText } from "../services/openaiService";
import { submitApplication } from "../services/apiService";

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
  const [successOpen, setSuccessOpen] = useState(false);

  const handleAI = async (fieldName, prompt) => {
    setLoading(true);
    setCurrentField(fieldName);
    const updatedPrompt = `${prompt}, reply in plain text`;

    try {
      const text = await generateText(updatedPrompt);
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

    setSuccessOpen(true);

    setSubmitting(false);
  };

  const handleSuccessClose = () => {
    // Clear redux
    dispatch(resetForm());

    // Clear localStorage if you persist form
    localStorage.removeItem("persist:root");

    // Close modal
    setSuccessOpen(false);
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
          onClick={() =>
            handleAI(
              "situation",
              "You help users write short, simple, clear Describe financial hardship, Write in maximum 5–6 short paragraphs. Keep response under 150 words.",
            )
          }
        >
          {loading ? <CircularProgress size={20} /> : t("help_write")}
        </Button>

        <TextField
          label={t("employment_circumstances")}
          {...register("employmentDesc", {
            required: t("employment_circumstances_required"),
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
            handleAI(
              "employmentDesc",
              "You help users write short, simple, clear Describe employment struggles, Write in maximum 5–6 short paragraphs. Keep response under 150 words.",
            )
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
            handleAI(
              "reason",
              "You help users write short, simple, clear why financial help is needed, Write in maximum 5–6 short paragraphs. Keep response under 150 words.",
            )
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

        <SuccessModal open={successOpen} onClose={handleSuccessClose} />

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
