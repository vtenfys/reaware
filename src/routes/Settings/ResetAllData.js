import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  faExclamationTriangle,
  faTrash,
  faShieldAlt,
  faArrowLeft,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { colors } from "../../lib/css";

import Header from "../../components/sections/Header";
import Main from "../../components/sections/Main";
import ToolBar from "../../components/sections/ToolBar";
import CardButton from "../../components/widgets/CardButton";
import InlineButton from "../../components/widgets/InlineButton";
import LabeledButtonGroup from "../../components/widgets/LabeledButtonGroup";

// TODO: make reset button functional
function ResetAllData() {
  const { goBack } = useHistory();
  const [resetEnabled, setResetEnabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setResetEnabled(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header title="Reset All Data" icon={faExclamationTriangle} size="sm" />
      <Main>
        <LabeledButtonGroup
          label="Are you sure you want to reset all data?"
          hint="This will delete all your journaled thoughts and clear your settings."
          size="lg"
        >
          <CardButton
            title="No, keep my data"
            color={colors.primary}
            icon={faShieldAlt}
            onClick={goBack}
          />
          <CardButton
            title="Yes, reset all data"
            disabled={!resetEnabled}
            color={colors.danger}
            icon={faTrash}
          />
        </LabeledButtonGroup>
      </Main>
      <ToolBar
        left={
          <InlineButton text={"Back"} icon={faArrowLeft} onClick={goBack} />
        }
        right={<InlineButton text="Help" icon={faQuestionCircle} />}
      />
    </>
  );
}

export default ResetAllData;
