import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C5FBC',
    },
    secondary: {
      main: '#636363',
    },
  },
  typography: {
    fontFamily: 'Inter',
    button: {
      fontWeight: 700,
      fontSize: 13,
      textTransform: 'capitalize',
      lineHeight: 1.5,
    },
  },
  spacing: 1,
  shape: {
    borderRadius: 8,
  },
});