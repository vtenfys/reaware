import React from "react";
import nw from "nw.gui";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";

import App from "./App";

// Load global styles
import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

// Prevent loading duplicate CSS
faConfig.autoAddCss = false;

async function main() {
  if (nw.App.argv.includes("--devtools")) {
    // Open Chrome DevTools and load React DevTools helper
    nw.Window.get().showDevTools();
    await import("react-devtools");
  }

  const ReactDOM = await import("react-dom");
  ReactDOM.render(<App />, document.getElementById("app"));
}

main(); // Start app
