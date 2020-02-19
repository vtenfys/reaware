import React from "react";
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
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ConfigProvider>
        <div className={classes.root}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="FirstRun" element={<FirstRun />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </ConfigProvider>
    </Router>
  );
}

export default App;
