import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  icon: {
    float: "right",
  },
});

function Header({ title, subtitle, icon }) {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <h1 className={classes.title}>
          {title}
          <FontAwesomeIcon className={classes.icon} icon={icon} />
        </h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </Container>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default Header;
