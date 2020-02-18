import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  faSmileBeam,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useConfig } from "../lib/config";
import { colors } from "../lib/css";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import ToolBar from "../components/sections/ToolBar";
import LabeledInput from "../components/widgets/LabeledInput";
import CardButton from "../components/widgets/CardButton";
import InlineButton from "../components/widgets/InlineButton";

function Home() {
  const { config, dispatch } = useConfig();
  const [name, setName] = useState("");

  return (
    <>
      {!config.firstRun && <Redirect to="/" />}
      <Header
        title="Welcome to ReAware!"
        subtitle="Let's help you get started."
        icon={faSmileBeam}
      />
      <Main>
        <LabeledInput
          label="What shall we call you?"
          hint="You can use your real name or a nickname."
          value={name}
          onChange={e => setName(e.target.value)}
          size="lg"
          autoComplete="off"
        />
        <CardButton
          title="Start"
          onClick={() => dispatch({ type: "completeFirstRun", name })}
          color={colors.primary}
          size="lg"
        />
      </Main>
      <ToolBar right={<InlineButton text="Help" icon={faQuestionCircle} />} />
    </>
  );
}

export default Home;
