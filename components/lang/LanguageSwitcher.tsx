"use client";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslationsContext } from "../../app/contexts/TranslationContext";
import { MenuItem } from "@mui/material";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslationsContext();

  const handleChange = (event: SelectChangeEvent) => {
    setLocale(event.target.value as string);
  };
  return (
    <Select value={locale} label="Language" onChange={handleChange}>
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="fr">French</MenuItem>
    </Select>
  );
}
