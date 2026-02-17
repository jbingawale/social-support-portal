import { Box, Typography } from "@mui/material";

export default function AppFooter() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 2,
        textAlign: "center",
        bgcolor: "grey.200",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Financial Assistance Program
      </Typography>
    </Box>
  );
}
