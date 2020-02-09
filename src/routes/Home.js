import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../components/core/Container";
import Header from "../components/sections/Header";
import FeatureButton from "../components/widgets/FeatureButton";

const useStyles = createUseStyles({
  section: {
    padding: [32, 0],
  },
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <Header
        title="Good evening, Name."
        subtitle="You have N cards to review today."
      />
      <section className={classes.section}>
        <Container>
          <FeatureButton
            to="/review"
            title="Review Today's Cards"
            subtitle="Reviewing cards helps you positively restructure distorted thoughts"
          />
        </Container>
      </section>
    </>
  );
}

export default Home;
