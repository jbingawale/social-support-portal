import { useForm } from "react-hook-form";
import { TextField, Button, CircularProgress } from "@mui/material";
import { generateText } from "../services/openaiService";
import { useState } from "react";
import AIHelpModal from "../components/AIHelpModal";
import { useTranslation } from "react-i18next";

export default function Step3() {
  const { t } = useTranslation();

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [aiText, setAiText] = useState("");
  const [currentField, setCurrentField] = useState("");

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

  return (
    <>
      <TextField
        label={t("financial_situation")}
        {...register("situation", {
          required: "Financial Situation is required",
        })}
        error={!!errors.situation}
        helperText={errors.situation?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Financial Situation",
          },
        }}
        multiline
        rows={4}
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button
        onClick={() =>
          handleAI("situation", "Help me describe my financial hardship")
        }
        aria-label={loading ? "Loading" : "Go to next step"}
      >
        {loading ? <CircularProgress size={20} /> : t("help_write")}
      </Button>

      <TextField
        label={t("employment_circumstances")}
        {...register("employmentDesc", {
          required: "Employment Circumstances is required",
        })}
        error={!!errors.employmentDesc}
        helperText={errors.employmentDesc?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Employment Circumstances",
          },
        }}
        multiline
        rows={4}
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button
        onClick={() =>
          handleAI("employmentDesc", "Describe my employment struggles")
        }
        aria-label={loading ? "Loading" : "Go to next step"}
      >
        {loading ? <CircularProgress size={20} /> : t("help_write")}
      </Button>

      <TextField
        label={t("reason_applying")}
        {...register("reason", {
          required: "Reason for Applying is required",
        })}
        error={!!errors.reason}
        helperText={errors.reason?.message}
        slotProps={{
          htmlInput: {
            "aria-label": "Reason for Applying",
          },
        }}
        multiline
        rows={4}
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button
        onClick={() =>
          handleAI("reason", "Explain why I need financial support")
        }
        aria-label={loading ? "Loading" : "Go to next step"}
      >
        {loading ? <CircularProgress size={20} /> : t("help_write")}
      </Button>

      <AIHelpModal
        open={openModal}
        aiText={aiText}
        onClose={() => setOpenModal(false)}
        onAccept={(text) => setValue(currentField, text)}
      />
    </>
  );
}
