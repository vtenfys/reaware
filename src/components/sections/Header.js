import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createUseStyles } from "react-jss";
import { rem, colors } from "../../lib/css";

import Container from "../core/Container";

const useStyles = createUseStyles({
  header: {
    paddingTop: props => (props.small ? 32 : 64),
    paddingBottom: props => (props.small ? 24 : 32),
    backgroundColor: colors.dark,
    color: colors.light,
  },

  subtitle: {
    fontSize: rem(18),
    marginTop: 16,
  },
});

function Header({ title, subtitle, icon, small = false }) {
  const classes = useStyles({ small });

  return (
    <header className={classes.header}>
      <Container>
        <h1>
          {title}
          <FontAwesomeIcon icon={icon} pull="right" />
        </h1>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
      </Container>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.object.isRequired,
  small: PropTypes.bool,
};

export default Header;
