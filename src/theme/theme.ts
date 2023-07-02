import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 8, // Default spacing value

  palette: {
    primary: {
      main: "#111827", // dark color
    },
    secondary: {
      main: "#ccd3d6", // light gray
      dark: "#000000",  // black color
      light: "#ffffff", // white color
      contrastText: "#94a2af", // dark gray 
    },
    error: {
      main: "#bc3631", // error color
    },
    warning: {
      main: "#fbbf34", // yellow color
    },
    info: {
      main: "#12a5e7", // blue color
    },
    success: {
      main: "#5dc65f", // green color
    },
  },

  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600, // Custom font weight for h1
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600, // Custom font weight for h2
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600, // Custom font weight for h3
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600, // Custom font weight for h4
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600, // Custom font weight for h5
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600, // Custom font weight for h6
    },
    body1: {
      fontSize: ".95rem",
      fontWeight: 400, // Custom font weight for body1
    },
  },

  breakpoints: {
    values: {
      xs: 0, // extra small devices (portrait phones)
      sm: 420, // small devices (landscape phones)
      md: 960, // medium devices (tablets)
      lg: 1020, // large devices (laptops/desktops)
      xl: 1920, // extra large devices (large desktops)
    },
  },
});

export default theme;
