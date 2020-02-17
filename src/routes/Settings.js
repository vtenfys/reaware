import React from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";

function Settings() {
  return (
    <>
      <Header title="Settings" icon={faCog} small />
      <Main></Main>
    </>
  );
}

export default Settings;
