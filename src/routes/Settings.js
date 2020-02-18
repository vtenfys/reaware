import React, { useState } from "react";
import {
  faCog,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import { useConfig } from "../lib/config";
import { colors } from "../lib/css";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import LabeledInput from "../components/widgets/LabeledInput";
import CardButton from "../components/widgets/CardButton";
import ToolBar from "../components/sections/ToolBar";

function Settings() {
  const { config } = useConfig();
  const [name, setName] = useState(config.name);

  return (
    <>
      <Header title="Settings" icon={faCog} size="sm" />
      <Main>
        <LabeledInput
          label="What shall we call you?"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <CardButton
          title="Reset all data"
          color={colors.danger}
          icon={faExclamationTriangle}
        />
      </Main>
      <ToolBar></ToolBar>
    </>
  );
}

export default Settings;
