import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <>
      <Button onClick={() => i18n.changeLanguage("en")}>EN</Button>
      <Button onClick={() => i18n.changeLanguage("ar")}>AR</Button>
    </>
  );
}
