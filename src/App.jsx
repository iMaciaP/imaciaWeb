// @flow
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import MainLayout from "./layouts/MainLayout/MainLayout";
import theme from "./theme";
import "./App.css";

const App = (): React$Element<React$FragmentType> => {
  return (
    <Router>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <MainLayout />
            </Route>
            <Route path="/about">
              <div>
                about
                <Link to="/">home</Link>
              </div>
            </Route>
            <Route path="/contact">
              <div>
                contact
                <Link to="/">home</Link>
              </div>
            </Route>
          </Switch>
        </ThemeProvider>
      </React.Fragment>
    </Router>
  );
};

export default App;
