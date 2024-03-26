import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Define common theme colors. This is useful for when I want to include dark and light modes.
// I can override the primary and secondary colors for example depending on which color mode is being used without
// Redefining the colors that are the same across both modes such as transparent or active.
const commonColors = {
  textPrimary: "#ffffff",
  textSecondary: "#000000",
  backgroundDefault: "#101010",
  backgroundDepth: "#151515",
  backgroundOutline: "#808080",
  primary: "#ffffff",
  secondary: "#000000",
  transparent: "rgba(0, 0, 0, 0.5)",
  active: "#088F8F",
  formOutline: "#00ffff",
  actionActive: "#ffffff",
  label: "#0000ff",
};

// Create the theme
let RuffinWebTheme = createTheme({
  typography: {
    fontFamily: "Tahoma, Geneva, sans-serif",
    fontSize: 15,
    h1: { fontSize: 150, fontFamily: "FreeMono, monospace" },
    h2: { fontSize: 80 },
    body1: { fontWeight: 500 },
    p: { fontWeight: 500 },
  },
  palette: {
    primary: { main: commonColors.textPrimary },
    secondary: { main: commonColors.textSecondary },
    background: { default: commonColors.backgroundDefault },
    transparent: { main: commonColors.transparent },
    depth: { main: commonColors.backgroundDepth },
    outline: { main: commonColors.backgroundOutline },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
        notchedOutline: { borderColor: commonColors.textPrimary },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
        notchedOutline: { borderColor: commonColors.textPrimary },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { color: commonColors.secondary },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
          "&.Mui-disabled": {
            color: commonColors.textPrimary,
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            borderColor: commonColors.textPrimary,
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: { color: commonColors.primary },
        text: { color: commonColors.textPrimary },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { color: commonColors.textPrimary },
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {},
      },
    },
  },
});

// Enable responsive font sizes
RuffinWebTheme = responsiveFontSizes(RuffinWebTheme);

export default RuffinWebTheme;
