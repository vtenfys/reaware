import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { colors } from "./lib/css";
import { ConfigProvider } from "./lib/config";

import Home from "./routes/Home";
import FirstRun from "./routes/FirstRun";

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

export default App;
