// @flow
import * as React from "react";
import { ThemeProvider } from "@material-ui/core";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import PaperInfo from "./components/PaperInfo/PaperInfo";
import theme from "./theme";
import "./App.css";

const App = (): React$Element<React$FragmentType> => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <HeaderMenu />
        <PaperInfo />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
