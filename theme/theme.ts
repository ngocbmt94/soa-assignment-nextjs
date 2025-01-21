import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
declare module "@mui/material/styles" {
  interface Palette {
    orange: Palette["primary"];
  }
  interface PaletteOptions {
    orange?: PaletteOptions["primary"];
  }
  interface TypographyVariants {
    LargeTitle1: React.CSSProperties;
  }
  interface TypographyVariants {
    LargeTitle2: React.CSSProperties;
  }
  interface TypographyVariants {
    LargeTitle3: React.CSSProperties;
  }
  interface TypographyVariants {
    LargeTitle4: React.CSSProperties;
  }

  interface TypographyVariants {
    body1_desk: React.CSSProperties;
  }
  interface TypographyVariants {
    body1_mobi: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    LargeTitle1?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    LargeTitle2?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    LargeTitle3?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    LargeTitle4?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1_desk?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body1_mobi?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body_btn?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    LargeTitle1: true;
  }
  interface TypographyPropsVariantOverrides {
    LargeTitle2: true;
  }
  interface TypographyPropsVariantOverrides {
    LargeTitle3: true;
  }
  interface TypographyPropsVariantOverrides {
    LargeTitle4: true;
  }

  interface TypographyPropsVariantOverrides {
    body1_desk: true;
  }
  interface TypographyPropsVariantOverrides {
    body1_mobi: true;
  }
  interface TypographyPropsVariantOverrides {
    body_btn: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    main_button_1: true;
    button_animation: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: `${poppins.style.fontFamily}, Arial, sans-serif`,
    LargeTitle1: {
      fontSize: "52px",
      fontWeight: 600,
      lineHeight: "60px",
    },
    LargeTitle2: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    LargeTitle3: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "30px",
    },
    LargeTitle4: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    body1_desk: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    body1_mobi: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
    },
    body_btn: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "20px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 960,
      xl: 1240,
    },
  },
  palette: {
    primary: {
      main: "#F2542D",
      light: "#ffffff",
      dark: "#000000",
    },
    orange: {
      main: "#CA3E1B",
    },
  },
});

export const themeCustom = createTheme(theme, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "button_animation" },
          style: {
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            color: "white",
            fontSize: "18px",
            lineHeight: "20px",
            fontWeight: 500,
            backgroundColor: theme.palette.primary.main,
            borderRadius: "33px",
            minWidth: "64px",
            height: "40px",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease-in-out",
            textTransform: "uppercase",
            position: "relative",
            "& .end-icon": {
              position: "absolute",
              right: 0,
              opacity: 1,
            },
            "& .button-text": {
              position: "absolute",
              whiteSpace: "nowrap",
              opacity: 0,
              transform: "translateX(100%)",
              transition: "opacity 0.3s ease, transform 0.5s ease",
              zIndex: 1,
              marginRight: "22px",
            },
            "&:hover": {
              minWidth: "262px",
              "& .button-text": {
                opacity: 1,
                transform: "translateX(0)",
              },
            },
          },
        },
        {
          props: { variant: "main_button_1" },
          style: {
            display: "flex",
            padding: "12px 20px 12px 30px",
            color: "white",
            fontSize: "18px",
            lineHeight: "26px",
            fontWeight: 500,
            backgroundColor: "#000000",
            borderRadius: "3px",
            justifyContent: "space-between",
            "&:hover": {
              backgroundColor: "#000000",
            },
            [theme.breakpoints.down("md")]: {
              padding: "10px 15px 10px 20px",
              fontSize: "14px",
              lineHeight: "20px",
              height: "40px",
            },
          },
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${poppins.style.fontFamily}, Arial, sans-serif`,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          padding: 0,
          fontSize: "14px",
          "& .MuiSelect-icon": {
            color: "#FFFFFF",
          },
          "& .MuiSelect-select": {
            padding: "10px 16px",
            border: `2px solid ${theme.palette.primary.main}`,
          },
          "& .MuiSelect-nativeInput": {
            display: "none",
          },
          "&:hover": {
            backgroundColor: theme.palette.orange,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
