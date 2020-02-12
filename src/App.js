import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Home from "./routes/Home";
import { colors } from "./lib/css";
import { configDB, useGet } from "./lib/db";

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
  const doc = useGet(configDB, "545e6b1f-90ef-48e1-a5d8-cab27999c9cc");

  return (
    <Router>
      <div className={styles.root}>
        <h1>{doc?.foo}</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={Home} />
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
