import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import {
  faCog,
  faExclamationTriangle,
  faCheck,
  faArrowLeft,
  faUndo,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useStrings } from "../../lib/hooks";
import { useConfig } from "../../lib/config";
import { colors } from "../../lib/css";

import Header from "../../components/sections/Header";
import Main from "../../components/sections/Main";
import LabeledInput from "../../components/widgets/LabeledInput";
import CardButton from "../../components/widgets/CardButton";
import ToolBar from "../../components/sections/ToolBar";
import InlineButton from "../../components/widgets/InlineButton";

function init(config) {
  return { name: config.name, changed: false };
}

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name, changed: true };
    case "reset":
      return init(action.config);
    default:
      throw new Error("Invalid action type");
  }
}

function Settings() {
  const { push, goBack } = useHistory();
  const strings = useStrings();

  // Global configuration in local storage
  const [config, dispatchConfig] = useConfig();

  // User-modifiable configuration values shown
  // on this page - may contain unsaved changes
  const [settings, dispatchSettings] = useReducer(reducer, config, init);

  const applySettings = () => {
    dispatchConfig({ type: "applySettings", settings });
    goBack();
  };

  return (
    <>
      <Header title={strings.settings} icon={faCog} size="sm" />
      <Main>
        <LabeledInput
          label={strings.whatsYourName}
          value={settings.name}
          onChange={event =>
            dispatchSettings({
              type: "setName",
              name: event.target.value,
            })
          }
          autoComplete="off"
        />
        <CardButton
          title={strings.resetAllData}
          disabled={settings.changed}
          color={colors.danger}
          icon={faExclamationTriangle}
          onClick={() => push("ResetAllData")}
        />
      </Main>
      <ToolBar
        left={
          <>
            <InlineButton
              text={settings.changed ? strings.save : strings.back}
              icon={settings.changed ? faCheck : faArrowLeft}
              color={colors.primary}
              onClick={settings.changed ? applySettings : goBack}
            />
            <InlineButton
              text={strings.revert}
              icon={faUndo}
              disabled={!settings.changed}
              onClick={() => dispatchSettings({ type: "reset", config })}
            />
          </>
        }
        right={<InlineButton text={strings.help} icon={faQuestionCircle} />}
      />
    </>
  );
}

export default Settings;
