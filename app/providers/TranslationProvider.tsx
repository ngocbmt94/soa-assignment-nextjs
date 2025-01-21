
"use client"

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import useSWR from "swr";

import { TranslationContext } from "../contexts/TranslationContext";
import { fetchLanguages } from "../api/language";
import { transformArraysToObjects } from "../util/helper";

interface ITranslationProviderProps {
    children: ReactNode;
  }

const TranslationProvider : React.FC<ITranslationProviderProps> = ({ children }) => {
  // we can store to local storage
  const [locale, setLocale] = useState('en');
  
  // Use SWR to fetch translations
  const { data: translations, error, isLoading } = useSWR(`/api/v1/pages?lang=${locale}`, () => fetchLanguages(locale));

  console.log(translations ? transformArraysToObjects(translations[0]) : [])

  if (isLoading) {
    return <div>Loading translations...</div>; // Or display a spinner
  }

  
  // return context
  return (
    <TranslationContext.Provider value={{ locale, setLocale  }}>
      <NextIntlClientProvider messages={translations ? transformArraysToObjects(translations[0]) : []} locale={locale}>{children}</NextIntlClientProvider>
    </TranslationContext.Provider>
  );
};

export default TranslationProvider