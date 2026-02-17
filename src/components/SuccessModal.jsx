import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function SuccessModal({ open, onClose }) {
  const { t } = useTranslation();
  return (
    <Dialog open={open}>
      <DialogTitle>{t("application_submitted_successfully")}</DialogTitle>

      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
