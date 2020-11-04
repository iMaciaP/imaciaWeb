// @flow
import * as React from "react";
import { ThemeProvider } from "@material-ui/core";

import MainLayout from "./layouts/MainLayout/MainLayout";
import theme from "./theme";
import "./App.css";

const App = (): React$Element<React$FragmentType> => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
