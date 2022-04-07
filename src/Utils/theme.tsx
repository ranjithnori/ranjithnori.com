import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#741ce8",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h4: {
      color: "white",
    },
    h6: {
      color: "white",
    },
    body1: {
      color: "white",
    },
  },
});

export default theme;
