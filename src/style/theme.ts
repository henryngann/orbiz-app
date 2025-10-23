import { createTheme } from "@mui/material/styles";
import { robotoCondensed } from "./fonts";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2EB6FF",
      dark: "#1A8CD8",
    },
    secondary: {
      main: "#1B2D44",
    },
    background: {
      default: "#0f0f0f",
      paper: "#2b2b2b",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: `${robotoCondensed.style.fontFamily}, Arial, sans-serif`,
    body1: {
      fontWeight: 600,
    },
    subtitle2: {
      lineHeight: 0,
    },
    caption: {
      fontWeight: 700,
      letterSpacing: 0.5,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 225,
          backgroundColor: "#1e1e20",
          borderRadius: 12,
          border: "1px solid #2a2a2e",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#2a2a2e",
          color: "#ffffff",
          fontWeight: 400,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 8, cursor: "pointer", fontSize: 36 },
      },
    },
  },
});

export default theme;
