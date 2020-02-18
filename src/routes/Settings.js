import React from "react";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import LabeledInput from "../components/widgets/LabeledInput";
import CardButton from "../components/widgets/CardButton";

function Settings() {
  return (
    <>
      <Header title="Settings" icon={faCog} size="sm" />
      <Main>
        <LabeledInput
          label="What shall we call you?"
          hint="You can use your real name or a nickname."
        />
        <CardButton title="Reset all data" />
      </Main>
    </>
  );
}

export default Settings;
