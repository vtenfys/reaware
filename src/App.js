import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createUseStyles } from "react-jss";
import { colors } from "./lib/css";

import Spinner from "./components/sections/Spinner";
import Home from "./routes/Home";

// Load global app styles
import "./App.css";

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
      <div className={styles.root}>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <p>route not implemented</p>
              <p>
                <Link to="/">go back</Link>
              </p>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
