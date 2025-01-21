"use client";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import { poppins, themeCustom } from "../theme/theme";

import SWRProvider from "./providers/SWRProvider";
import TranslationProvider from "./providers/TranslationProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
      <SWRProvider>
          <TranslationProvider>
            <ThemeProvider theme={themeCustom}>
              <CssBaseline />
              <Box component="main" className={poppins.className}>
              
                {children}
              </Box>
            </ThemeProvider>
        </TranslationProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
