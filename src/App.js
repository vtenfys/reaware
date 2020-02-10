import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Home from "./routes/Home";
import { colors } from "./lib/css";

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
    <HashRouter>
      <div className={styles.root}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route>
            <p>route not implemented</p>
            <p>
              <Link to="/">go back</Link>
            </p>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
