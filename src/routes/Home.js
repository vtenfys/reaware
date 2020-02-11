import React from "react";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import { createUseStyles } from "react-jss";
import { colors } from "../lib/css";

import Container from "../components/core/Container";
import Header from "../components/sections/Header";
import CardButton from "../components/widgets/CardButton";

const useStyles = createUseStyles({
  main: {
    padding: [32, 0],
    overflow: "auto",
  },

  container: {
    "& a:not(:last-child)": {
      marginBottom: 24,
    },
  },
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <Header
        title="Good evening, Name."
        subtitle="You have N cards to review today."
        icon={faCloudMoon}
      />
      <main className={classes.main}>
        <Container className={classes.container}>
          <CardButton
            to="/review"
            title="Review Today's Cards"
            subtitle="Reviewing helps you mentally restructure journaled thoughts"
          />
          <CardButton
            to="/new-thought"
            title="Journal New Thought"
            subtitle="Journaling helps you respond rationally to distorted thoughts"
            color={colors.secondary}
          />
        </Container>
      </main>
    </>
  );
}

export default Home;
