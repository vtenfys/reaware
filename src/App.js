import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";

import { colors } from "./lib/css";
import { ConfigProvider } from "./lib/config";
import startApp from "./lib/startup";

import Home from "./routes/Home";
import FirstRun from "./routes/FirstRun";

// Load global app styles
import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

// Prevent loading FA CSS twice
faConfig.autoAddCss = false;

const useStyles = createUseStyles({
  root: {
    backgroundColor: colors.light,
    color: colors.dark,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const styles = useStyles();

  return (
    <Router>
      <ConfigProvider>
        <div className={styles.root}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/FirstRun">
              <FirstRun />
            </Route>
          </Switch>
        </div>
      </ConfigProvider>
    </Router>
  );
}

startApp(App);
