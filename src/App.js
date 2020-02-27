import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { colors } from "./lib/css";
import { ConfigProvider } from "./lib/config";

import Home from "./routes/Home";
import FirstRun from "./routes/FirstRun";
import Settings from "./routes/Settings";

const useStyles = createUseStyles({
  root: {
    backgroundColor: colors.light,
    color: colors.dark,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
});

function App({ rootElement }) {
  const classes = useStyles();

  useLayoutEffect(() => {
    rootElement.classList.add(classes.root);
    return () => rootElement.classList.remove(classes.root);
  }, [rootElement, classes]);

  return (
    <ConfigProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FirstRun" component={FirstRun} />
          <Route path="/Settings" component={Settings} />
        </Switch>
      </HashRouter>
    </ConfigProvider>
  );
}

App.propTypes = {
  rootElement: PropTypes.instanceOf(Element).isRequired,
};

export default App;
