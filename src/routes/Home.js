import React, { useMemo } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  faCloudSun,
  faSun,
  faCloudMoon,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import { colors } from "../lib/css";
import { useConfig } from "../lib/config";
import { useCurrentTime } from "../lib/hooks";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import CardButton from "../components/widgets/CardButton";

const moods = {
  morning: {
    greeting: "Good morning",
    icon: faCloudSun,
  },
  afternoon: {
    greeting: "Good afternoon",
    icon: faSun,
  },
  evening: {
    greeting: "Good evening",
    icon: faCloudMoon,
  },
  lateEvening: {
    greeting: "Good evening",
    icon: faMoon,
  },
};

function Home() {
  const { config } = useConfig();
  const { push } = useHistory();
  const { hour } = useCurrentTime();

  const mood = useMemo(() => {
    if (4 <= hour && hour < 12) {
      // 04:00 to 11:59
      return moods.morning;
    } else if (12 <= hour && hour < 19) {
      // 12:00 to 18:59
      return moods.afternoon;
    } else if (12 <= hour && hour < 22) {
      // 19:00 to 21:59
      return moods.evening;
    } else {
      // 22:00 to 03:00
      return moods.lateEvening;
    }
  }, [hour, moods]);

  return (
    <>
      {config.firstRun && <Redirect to="/FirstRun" />}
      <Header
        title={`${mood.greeting}, ${config.name}.`}
        subtitle="You have N cards to review today."
        icon={mood.icon}
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
