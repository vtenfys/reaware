import React from "react";
import nw from "nw.gui";

function startApp(App) {
  // Put async pre-render hooks here (e.g. migrations, backups)

  // Load React DevTools helper and show Chrome DevTools
  if (nw.App.argv.includes("--devtools")) {
    require("react-devtools");
    nw.Window.get().showDevTools();
  }

  // Render app into the DOM
  require("react-dom").render(<App />, document.getElementById("app"));

  // Hide loading spinner once app is ready
  document.getElementById("spinner").classList.add("hide");
}

export default startApp;
