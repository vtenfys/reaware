import React from "react";
import ReactDOM from "react-dom";

function startApp(App) {
  // Put async pre-render hooks here (e.g. migrations, backups)

  // Render app into the DOM
  ReactDOM.render(<App />, document.getElementById("app"));

  // Hide loading spinner once app is ready
  document.getElementById("spinner").classList.add("hide");
}

export default startApp;
