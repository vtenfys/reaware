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
import { useStrings } from "../../lib/hooks";

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
  const strings = useStrings();

  useEffect(() => {
    const timeout = setTimeout(() => setResetEnabled(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header
        title={strings.resetAllData}
        icon={faExclamationTriangle}
        size="sm"
      />
      <Main>
        <LabeledButtonGroup
          label={strings.resetDataPrompt}
          hint={strings.resetDataPromptHint}
          size="lg"
        >
          <CardButton
            title={strings.cancelResetData}
            color={colors.primary}
            icon={faShieldAlt}
            onClick={goBack}
          />
          <CardButton
            title={strings.confirmResetData}
            disabled={!resetEnabled}
            color={colors.danger}
            icon={faTrash}
          />
        </LabeledButtonGroup>
      </Main>
      <ToolBar
        left={
          <InlineButton
            text={strings.back}
            icon={faArrowLeft}
            onClick={goBack}
          />
        }
        right={<InlineButton text={strings.help} icon={faQuestionCircle} />}
      />
    </>
  );
}

export default ResetAllData;
