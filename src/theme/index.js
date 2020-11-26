import { createMuiTheme } from "@material-ui/core";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#47464d",
      dark: "#000",
    },
    secondary: {
      light: "#59d4ff",
      main: "#01bafa",
      dark: "#006496",
    },
    background: {
      main: "#e3e3e3",
    },
  },
  spacing: 8,
  typography,
});

export default theme;
