// @flow
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import theme from "./theme";
import "./App.css";

const App = (): React$Element<React$FragmentType> => {
  return (
    <Router>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <HeaderMenu />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/about">
                <div>
                  about
                  <Link to="/">home</Link>
                </div>
              </Route>
              <Route exact path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    </Router>
  );
};

export default App;
