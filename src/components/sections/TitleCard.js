import React from "react";
import PropTypes from "prop-types";

import { createUseStyles } from "react-jss";
import { rem, color } from "../../lib/css-helpers";

import Container from "../core/Container";

const useStyles = createUseStyles({
  header: {
    padding: [64, 0, 32],
    backgroundColor: color("dark"),
    color: color("light"),
  },
  title: {
    marginBottom: 12,
  },
  subtitle: {
    fontSize: rem(18),
  },
});

function TitleCard({ title, subtitle }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </Container>
    </header>
  );
}

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TitleCard;
