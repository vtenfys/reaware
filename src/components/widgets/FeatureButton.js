import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { createUseStyles } from "react-jss";
import { rem, colors } from "../../lib/css";
import color from "color";

const useStyles = createUseStyles({
  link: {
    display: "block",
    padding: [20, 24],
    borderRadius: 4,

    textDecoration: "none",
    backgroundColor: colors.primary,
    color: colors.light,

    "&:hover, &:focus": {
      backgroundColor: color(colors.primary)
        .lighten(0.125)
        .hex(),
    },

    "&:active": {
      backgroundColor: color(colors.primary)
        .darken(0.125)
        .hex(),
    },
  },

  title: {
    fontSize: rem(20),
    marginBottom: 8,
  },
});

function FeatureButton({ to, title, subtitle }) {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.link} aria-label={title}>
      <h2 className={classes.title}>{title}</h2>
      <p>{subtitle}</p>
    </Link>
  );
}

FeatureButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default FeatureButton;
