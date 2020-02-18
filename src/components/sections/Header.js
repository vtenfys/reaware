import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createUseStyles } from "react-jss";
import { rem, colors } from "../../lib/css";

import Container from "../core/Container";

const useStyles = createUseStyles({
  header: ({ size }) => ({
    paddingTop: { sm: 32, lg: 64 }[size],
    paddingBottom: { sm: 20, lg: 32 }[size],
    backgroundColor: colors.dark,
    color: colors.light,
  }),

  subtitle: {
    fontSize: rem(18),
    marginTop: 16,
  },
});

function Header({ title, subtitle, icon, size = "lg" }) {
  const classes = useStyles({ size });

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
  size: PropTypes.oneOf(["sm", "lg"]),
};

export default Header;
