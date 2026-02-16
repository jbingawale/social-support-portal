import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import LanguageSwitcher from "./components/LanguageSwitcher";
import StepperForm from "./components/StepperForm";

function App() {
  const { i18n } = useTranslation();

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <ThemeProvider theme={theme(dir)}>
      <div dir={dir}>
        <LanguageSwitcher />
        <StepperForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
