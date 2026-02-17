import { useTranslation } from "react-i18next";
import { ThemeProvider, Box } from "@mui/material";
import theme from "./theme";

import LanguageSwitcher from "./components/LanguageSwitcher";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import StepperForm from "./components/StepperForm";

function App() {
  const { i18n } = useTranslation();

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <ThemeProvider theme={theme(dir)}>
      <Box
        dir={dir}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "grey.100",
        }}
      >
        {/* HEADER */}
        <AppHeader />

        {/* MAIN CONTENT */}
        <Box sx={{ flex: 1, py: 6 }}>
          <Box
            sx={{
              maxWidth: 600,
              mx: "auto",
              p: 4,
              borderRadius: 3,
              boxShadow: 3,
              bgcolor: "background.paper",
            }}
          >
            <LanguageSwitcher />

            <StepperForm />
          </Box>
        </Box>

        {/* FOOTER */}
        <AppFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
