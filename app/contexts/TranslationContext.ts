"use client";

import { createContext, useContext } from "react";

// define type
interface TranslationContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

// create context
export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Custom hook to access translations and context
export const useTranslationsContext = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslationsContext must be used within a TranslationProvider");
  }
  return context;
};
