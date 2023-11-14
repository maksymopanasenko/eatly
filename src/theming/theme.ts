import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    customGray: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    customGray: object;
  }
}

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 30,
          paddingRight: 30,
          '@media (min-width: 600px)': {
            paddingLeft: 40,
            paddingRight: 40,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: 'start',
          padding: 5,
          width: 'auto',
          justifyContent: 'flex-start'
        },
      },
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#6C5FBC',
    },
    secondary: {
      main: '#636363',
    },
    customGray: {
      main: '#CBCBCB',
      dark: '#70798B',
      light: '#EAEAEA',
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
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Poppins',
      fontSize: 21,
      fontWeight: 600,
    }
  },
  spacing: 1,
  shape: {
    borderRadius: 8,
  },
});