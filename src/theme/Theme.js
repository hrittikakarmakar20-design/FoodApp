import { backdropClasses, colors, createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    background: {
      default: "#121A1D",
    },
    text: {
      primary: "#ffffff",
      secondary: "#D68240",
    },
    primary: {
      main: "#D68240",
    },

    secondary: {
      main: "#121A1D"
    }
  },
  typography: {
    fontFamily: "'Class display Variable', Poppins",
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
      color: "#ffffff",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5625rem",
      // color: "#D68240",
      fontFamily: "Clash Display Variable"
    },
    body1: {
      fontSize: "1rem",
      color: "#9C9D9B",
    },
    
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "15px 20px",
          borderRadius: "8px",
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#D68240",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "#D68240"
          },
        },

        containedSecondary: {
          backgroundColor: "#121A1D",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "#D68240"
          },
        },
        
      },
    },
  },
});

export default Theme;