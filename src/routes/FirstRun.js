import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { faLaughBeam } from "@fortawesome/free-solid-svg-icons";

import { useConfig } from "../lib/config";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import BigInput from "../components/widgets/BigInput";
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
        icon={faLaughBeam}
      />
      <Main>
        <BigInput
          label="What shall we call you?"
          hint="You can use your real name or a nickname."
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
        />
        <CardButton
          title="Start"
          onClick={() => dispatch({ type: "completeFirstRun", name })}
        />
      </Main>
    </>
  );
}

export default Home;
