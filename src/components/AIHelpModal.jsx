import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function AIHelpModal({ open, onClose, aiText, onAccept }) {
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    setEditedText(aiText);
  }, [aiText]);

  return (
    <Dialog open={open} fullWidth maxWidth="md">
      <DialogTitle>AI Suggestion</DialogTitle>

      <DialogContent tabIndex={0}>
        <TextField
          multiline
          rows={6}
          fullWidth
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Discard</Button>

        <Button
          variant="contained"
          onClick={() => {
            onAccept(editedText);
            onClose();
          }}
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}
