import React from "react";
import ReactDOM from "react-dom";

import TitleCard from "./components/sections/TitleCard";

function App() {
  return (
    <TitleCard
      title="Good evening, David."
      subtitle="You have 5 cards to review today."
    />
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
