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
      main: "#fb742d",
    },
    background: {
      main: "#e3e3e3",
    },
  },
  spacing: 8,
  typography,
});

export default theme;
