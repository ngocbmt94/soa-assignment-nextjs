// import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
// import { NextIntlClientProvider } from "next-intl";
// import { useRouter } from "next/router";

// interface Translations {
//   [key: string]: string;
// }

// interface TranslationContextType {
//   translations: Translations;
//   setTranslations: React.Dispatch<React.SetStateAction<Translations>>;
// }

// const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// interface ITranslationProviderProps {
//   children: ReactNode;
// }

// export const TranslationProvider: React.FC<ITranslationProviderProps> = ({ children }) => {
//   const [translations, setTranslations] = useState<Translations>({});
//   const { locale } = useRouter();

//   useEffect(() => {
//     // Fetch translations based on the current locale from an external API
//     const fetchTranslations = async () => {
//       try {
//         const res = await fetch(` https://api.test.soa-dev.net/api/v1/pages?lang=${locale}`);
//         const data: Translations = await res.json();
//         setTranslations(data);
//       } catch (error) {
//         console.error("Error fetching translations:", error);
//       }
//     };

//     fetchTranslations();
//   }, [locale]);

//   return (
//     <TranslationContext.Provider value={{ translations, setTranslations }}>
//       <NextIntlClientProvider messages={translations}>{children}</NextIntlClientProvider>
//     </TranslationContext.Provider>
//   );
// };

// // Custom hook to access translations and context
// export const useTranslationsContext = (): TranslationContextType => {
//   const context = useContext(TranslationContext);
//   if (!context) {
//     throw new Error("useTranslationsContext must be used within a TranslationProvider");
//   }
//   return context;
// };
