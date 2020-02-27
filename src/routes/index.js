import React, { useMemo } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  faCloudSun,
  faSun,
  faCloudMoon,
  faMoon,
  faSearch,
  faQuestionCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import { colors } from "../lib/css";
import { useConfig } from "../lib/config";
import { useCurrentTime } from "../lib/hooks";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import CardButton from "../components/widgets/CardButton";
import ToolBar from "../components/sections/ToolBar";
import InlineButton from "../components/widgets/InlineButton";

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
  const [config] = useConfig();
  const { push } = useHistory();
  const { hour } = useCurrentTime();

  const mood = useMemo(() => {
    if (4 <= hour && hour < 12) {
      // 04:00 to 11:59
      return moods.morning;
    } else if (12 <= hour && hour < 18) {
      // 12:00 to 17:59
      return moods.afternoon;
    } else if (18 <= hour && hour < 22) {
      // 18:00 to 21:59
      return moods.evening;
    } else {
      // 22:00 to 03:00
      return moods.lateEvening;
    }
  }, [hour, moods]);

  return (
    <>
      {config.firstRun && <Redirect to="FirstRun" />}
      <Header
        title={`${mood.greeting}, ${config.name}.`}
        subtitle="You have N cards to review today."
        icon={mood.icon}
      />
      <Main>
        <CardButton
          onClick={() => push("Review")}
          title="Review Today's Cards"
          subtitle="Reviewing helps you mentally restructure journaled thoughts"
          color={colors.primary}
          size="lg"
        />
        <CardButton
          onClick={() => push("Journal")}
          title="Journal New Thought"
          subtitle="Journaling helps you respond rationally to distorted thoughts"
          size="lg"
        />
      </Main>
      <ToolBar
        left={<InlineButton text="Card Browser" icon={faSearch} />}
        right={
          <>
            <InlineButton
              text="Settings"
              icon={faCog}
              onClick={() => push("Settings/")}
            />
            <InlineButton text="Help" icon={faQuestionCircle} />
          </>
        }
      />
    </>
  );
}

export default Home;
