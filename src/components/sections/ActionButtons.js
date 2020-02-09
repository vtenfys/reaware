import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Container from "../core/Container";

const useStyles = createUseStyles({
  section: {
    padding: [32, 0],
  },
});

function ActionButtons() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <Link to="/review">
          <h2>Review Today&rsquo;s Cards</h2>
        </Link>
      </Container>
    </section>
  );
}

export default ActionButtons;
