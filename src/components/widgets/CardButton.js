import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { createUseStyles } from "react-jss";
import { rem, colors, lighten, darken } from "../../lib/css";

const useStyles = createUseStyles({
  button: ({ color, size }) => ({
    padding: { sm: [14, 16], lg: [20, 24] }[size],
    borderRadius: 4,

    textAlign: "left",
    textDecoration: "none",
    backgroundColor: color,
    color: colors.light,
    border: "none",
    cursor: "pointer",

    "&:hover, &:focus": {
      backgroundColor: lighten(color),
      color: colors.white,

      "& span:first-child": {
        textDecoration: "underline",
      },
    },

    "&:active": {
      backgroundColor: darken(color),
      color: colors.light,
    },
  }),

  title: ({ size }) => ({
    display: "block",
    fontWeight: 700,
    fontSize: rem({ sm: 18, lg: 20 }[size]),
  }),

  subtitle: ({ size }) => ({
    display: "block",
    fontSize: rem({ sm: 14, lg: 16 }[size]),
    marginTop: { sm: 8, lg: 12 }[size],
  }),
});

function CardButton({
  onClick,
  title,
  subtitle,
  icon = faArrowRight,
  color = colors.secondary,
  size = "sm",
}) {
  const classes = useStyles({ color, size });

  return (
    <button onClick={onClick} className={classes.button} aria-label={title}>
      <span className={classes.title}>
        {title}
        <FontAwesomeIcon icon={icon} pull="right" />
      </span>
      {subtitle && <span className={classes.subtitle}>{subtitle}</span>}
    </button>
  );
}

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
};

export default CardButton;
