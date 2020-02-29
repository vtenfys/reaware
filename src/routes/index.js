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
import { useCurrentTime, useStrings } from "../lib/hooks";

import Header from "../components/sections/Header";
import Main from "../components/sections/Main";
import CardButton from "../components/widgets/CardButton";
import ToolBar from "../components/sections/ToolBar";
import InlineButton from "../components/widgets/InlineButton";

const moods = {
  morning: {
    string: "morningGreeting",
    icon: faCloudSun,
  },
  afternoon: {
    string: "afternoonGreeting",
    icon: faSun,
  },
  evening: {
    string: "eveningGreeting",
    icon: faCloudMoon,
  },
  lateEvening: {
    string: "eveningGreeting",
    icon: faMoon,
  },
};

function Home() {
  const [config] = useConfig();
  const { push } = useHistory();
  const { hour } = useCurrentTime();
  const strings = useStrings();

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
        title={strings[mood.string](config.name)}
        subtitle={strings.cardsToReview(0)}
        icon={mood.icon}
      />
      <Main>
        <CardButton
          onClick={() => push("Review")}
          title={strings.reviewCards}
          subtitle={strings.reviewCardsHint}
          color={colors.primary}
          size="lg"
        />
        <CardButton
          onClick={() => push("Journal")}
          title={strings.journalThought}
          subtitle={strings.journalThoughtHint}
          size="lg"
        />
      </Main>
      <ToolBar
        left={<InlineButton text={strings.cardBrowser} icon={faSearch} />}
        right={
          <>
            <InlineButton
              text={strings.settings}
              icon={faCog}
              onClick={() => push("Settings/")}
            />
            <InlineButton text={strings.help} icon={faQuestionCircle} />
          </>
        }
      />
    </>
  );
}

export default Home;
