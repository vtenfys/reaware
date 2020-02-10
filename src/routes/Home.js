import React from "react";
import { createUseStyles } from "react-jss";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import Container from "../components/core/Container";
import Header from "../components/sections/Header";
import FeatureButton from "../components/widgets/FeatureButton";

const useStyles = createUseStyles({
  section: {
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
      <section className={classes.section}>
        <Container className={classes.container}>
          <FeatureButton
            to="/review"
            title="Review Today's Cards"
            subtitle="Reviewing helps you mentally restructure journaled thoughts"
          />
          <FeatureButton
            to="/new-thought"
            title="Journal New Thought"
            subtitle="Journaling helps you respond rationally to distorted thoughts"
            type="secondary"
          />
        </Container>
      </section>
    </>
  );
}

export default Home;
