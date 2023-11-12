import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    greyBorder: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    greyBorder: object;
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C5FBC',
    },
    secondary: {
      main: '#636363',
    },
    greyBorder: {
      main: '#CBCBCB',
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