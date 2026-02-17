import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AIHelpModal({ open, onClose, aiText, onAccept }) {
  const { t } = useTranslation();
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    setEditedText(aiText);
  }, [aiText]);

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>{t("ai_suggestion")}</DialogTitle>

      <DialogContent dividers>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          {t("edit_text")}
        </Typography>

        <TextField
          multiline
          rows={6}
          fullWidth
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{t("discard")}</Button>

        <Button
          variant="contained"
          onClick={() => {
            onAccept(editedText);
            onClose();
          }}
        >
          {t("accept")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
