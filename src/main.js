import React from "react";
import ReactDOM from "react-dom";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";

import App from "./App";

// Load global styles
import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

// Prevent loading duplicate CSS
faConfig.autoAddCss = false;

// Pass rootElement to App so it can be styled
const rootElement = document.getElementById("root");
ReactDOM.render(<App rootElement={rootElement} />, rootElement);
