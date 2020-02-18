import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  faCog,
  faExclamationTriangle,
  faCheck,
  faUndo,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useConfig } from "../lib/config";
import { colors } from "../lib/css";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import LabeledInput from "../components/widgets/LabeledInput";
import CardButton from "../components/widgets/CardButton";
import ToolBar from "../components/sections/ToolBar";
import InlineButton from "../components/widgets/InlineButton";

// TODO: change "done" to "save" after changes are made
// TODO: disable revert button until a change is made
// TODO: make reset button functional
function Settings() {
  const { goBack } = useHistory();
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
      <ToolBar
        left={
          <>
            <InlineButton
              text="Done"
              icon={faCheck}
              color={colors.primary}
              onClick={goBack}
            />
            <InlineButton text="Revert" icon={faUndo} />
          </>
        }
        right={<InlineButton text="Help" icon={faQuestionCircle} />}
      />
    </>
  );
}

export default Settings;
