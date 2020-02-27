import React, { useLayoutEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { HashRouter, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";

import { colors } from "./lib/css";
import { ConfigProvider } from "./lib/config";

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
        <RouteManager />
      </HashRouter>
    </ConfigProvider>
  );
}

function RouteManager() {
  const { pathname } = useLocation();
  const route = pathname.replace(/^\//, "");

  const Component = useMemo(() => {
    return require(`./routes/${route}`).default;
  }, [pathname]);

  return <Component />;
}

App.propTypes = {
  rootElement: PropTypes.instanceOf(Element).isRequired,
};

export default App;
