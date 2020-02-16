import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import { colors } from "../lib/css";
import { useConfig } from "../lib/config";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import CardButton from "../components/widgets/CardButton";

function Home() {
  const { config } = useConfig();
  const { push } = useHistory();

  return (
    <>
      {config.firstRun && <Redirect to="/first-run" />}
      <Header
        title={`Good evening, ${config.name}.`}
        subtitle="You have N cards to review today."
        icon={faCloudMoon}
      />
      <Main>
        <CardButton
          onClick={() => push("/review")}
          title="Review Today's Cards"
          subtitle="Reviewing helps you mentally restructure journaled thoughts"
        />
        <CardButton
          onClick={() => push("/new-thought")}
          title="Journal New Thought"
          subtitle="Journaling helps you respond rationally to distorted thoughts"
          color={colors.secondary}
        />
      </Main>
    </>
  );
}

export default Home;
