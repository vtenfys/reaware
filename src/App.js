import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/review">
          <div>test</div>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
