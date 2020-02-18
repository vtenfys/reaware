import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";

import { useConfig } from "../lib/config";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import LabeledInput from "../components/widgets/LabeledInput";
import CardButton from "../components/widgets/CardButton";

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
          size="lg"
        />
      </Main>
    </>
  );
}

export default Home;
