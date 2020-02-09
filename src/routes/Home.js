import React from "react";

import Header from "../components/sections/Header";
import ActionButtons from "../components/sections/ActionButtons";

function Home() {
  return (
    <>
      <Header
        title="Good evening, David."
        subtitle="You have 5 cards to review today."
      />
      <ActionButtons />
    </>
  );
}

export default Home;
