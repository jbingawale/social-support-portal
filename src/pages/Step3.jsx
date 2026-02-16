import { useForm } from "react-hook-form";
import { TextField, Button, CircularProgress } from "@mui/material";
import { generateText } from "../services/openaiService";
import { useState } from "react";
import AIHelpModal from "../components/AIHelpModal";

export default function Step3() {
  const { register, setValue } = useForm();

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
        label="Financial Situation"
        {...register("situation")}
        multiline
        rows={4}
        fullWidth
      />
      <Button
        onClick={() =>
          handleAI("situation", "Help me describe my financial hardship")
        }
      >
        {loading ? <CircularProgress size={20} /> : "Help Me Write"}
      </Button>

      <TextField
        label="Employment Circumstances"
        {...register("employmentDesc")}
        multiline
        rows={4}
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button
        onClick={() =>
          handleAI("employmentDesc", "Describe my employment struggles")
        }
      >
        {loading ? <CircularProgress size={20} /> : "Help Me Write"}
      </Button>

      <TextField
        label="Reason for Applying"
        {...register("reason")}
        multiline
        rows={4}
        fullWidth
        sx={{ mt: 3 }}
      />
      <Button
        onClick={() =>
          handleAI("reason", "Explain why I need financial support")
        }
      >
        {loading ? <CircularProgress size={20} /> : "Help Me Write"}
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
