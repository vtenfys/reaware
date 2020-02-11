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
    backgroundColor: props => props.color,
    color: colors.light,

    "&:hover, &:focus": {
      backgroundColor: props => lighten(props.color),
      color: colors.white,

      "& h2": {
        textDecoration: "underline",
      },
    },

    "&:active": {
      backgroundColor: props => darken(props.color),
      color: colors.light,
    },
  },

  title: {
    fontSize: rem(20),
  },

  subtitle: {
    marginTop: 12,
  },

  icon: {
    float: "right",
  },
});

function CardButton({ to, title, subtitle, color = colors.primary }) {
  const classes = useStyles({ color });

  return (
    <Link to={to} className={classes.link} aria-label={title}>
      <h2 className={classes.title}>
        {title}
        <FontAwesomeIcon className={classes.icon} icon={faArrowRight} />
      </h2>
      {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
    </Link>
  );
}

CardButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

export default CardButton;
