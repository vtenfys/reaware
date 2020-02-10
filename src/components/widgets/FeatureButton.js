import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { createUseStyles } from "react-jss";
import { rem, colors, lighten, darken } from "../../lib/css";

const useStyles = createUseStyles({
  link: {
    display: "block",
    padding: [20, 24],
    borderRadius: 4,

    textDecoration: "none",
    backgroundColor: props => colors[props.type],
    color: colors.light,

    "&:hover, &:focus": {
      backgroundColor: props => lighten(colors[props.type]),

      "& h2": {
        textDecoration: "underline",
      },
    },

    "&:active": {
      backgroundColor: props => darken(colors[props.type]),
    },
  },

  title: {
    fontSize: rem(20),
    marginBottom: 12,
  },

  icon: {
    float: "right",
  },
});

function FeatureButton({ to, title, subtitle, type = "primary" }) {
  const classes = useStyles({ type });

  return (
    <Link to={to} className={classes.link} aria-label={title}>
      <h2 className={classes.title}>
        {title}
        <FontAwesomeIcon className={classes.icon} icon={faArrowRight} />
      </h2>
      <p>{subtitle}</p>
    </Link>
  );
}

FeatureButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FeatureButton;
