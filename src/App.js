import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <ConfigProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="FirstRun" element={<FirstRun />} />
          <Route path="Settings" element={<Settings />} />
        </Routes>
      </ConfigProvider>
    </Router>
  );
}

App.propTypes = {
  rootElement: PropTypes.instanceOf(Element).isRequired,
};

export default App;
