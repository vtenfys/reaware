import React from "react";
import PropTypes from "prop-types";

import { createUseStyles } from "react-jss";
import { rem, colors } from "../../lib/css";

import Container from "../core/Container";

const useStyles = createUseStyles({
  header: {
    padding: [64, 0, 32],
    backgroundColor: colors.dark,
    color: colors.light,
  },

  title: {
    marginBottom: 16,
  },

  subtitle: {
    fontSize: rem(18),
  },
});

function Header({ title, subtitle }) {
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
