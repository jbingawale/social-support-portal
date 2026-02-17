import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";

export default function AppHeader() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={600}>
          🏛️ Assistance Portal
        </Typography>

        <Box>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
