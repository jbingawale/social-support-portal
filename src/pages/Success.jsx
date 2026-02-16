import { Typography, Box } from "@mui/material";

export default function Success() {
  return (
    <Box textAlign="center" mt={5} tabIndex={0}>
      <Typography variant="h4">🎉 Application Submitted!</Typography>
      <Typography mt={2}>
        Thank you. Our team will review your request.
      </Typography>
    </Box>
  );
}
