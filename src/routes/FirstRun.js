import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  faSmileBeam,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useConfig } from "../lib/config";
import { colors } from "../lib/css";
import { useStrings } from "../lib/hooks";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import ToolBar from "../components/sections/ToolBar";
import LabeledInput from "../components/widgets/LabeledInput";
import CardButton from "../components/widgets/CardButton";
import InlineButton from "../components/widgets/InlineButton";

function Home() {
  const [config, dispatch] = useConfig();
  const [name, setName] = useState("");
  const strings = useStrings();

  return (
    <>
      {!config.firstRun && <Redirect to="/" />}
      <Header
        title={strings.welcome}
        subtitle={strings.helpGetStarted}
        icon={faSmileBeam}
      />
      <Main>
        <LabeledInput
          label={strings.whatsYourName}
          hint={strings.whatsYourNameHint}
          value={name}
          onChange={event => setName(event.target.value)}
          size="lg"
          autoComplete="off"
        />
        <CardButton
          title={strings.start}
          onClick={() => dispatch({ type: "completeFirstRun", name })}
          color={colors.primary}
          size="lg"
        />
      </Main>
      <ToolBar
        right={<InlineButton text={strings.help} icon={faQuestionCircle} />}
      />
    </>
  );
}

export default Home;
