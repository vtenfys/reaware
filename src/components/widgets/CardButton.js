import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { createUseStyles } from "react-jss";
import { rem, colors, lighten, darken } from "../../lib/css";

const useStyles = createUseStyles({
  button: {
    padding: [20, 24],
    borderRadius: 4,

    textAlign: "left",
    textDecoration: "none",
    backgroundColor: props => props.color,
    color: colors.light,
    border: "none",
    cursor: "pointer",

    "&:hover, &:focus": {
      backgroundColor: props => lighten(props.color),
      color: colors.white,

      "& span:first-child": {
        textDecoration: "underline",
      },
    },

    "&:active": {
      backgroundColor: props => darken(props.color),
      color: colors.light,
    },
  },

  title: {
    display: "block",
    fontWeight: 700,
    fontSize: rem(20),
  },

  subtitle: {
    display: "block",
    fontSize: rem(16),
    marginTop: 12,
  },

  icon: {
    float: "right",
  },
});

function CardButton({ onClick, title, subtitle, color = colors.primary }) {
  const classes = useStyles({ color });

  return (
    <button onClick={onClick} className={classes.button} aria-label={title}>
      <span className={classes.title}>
        {title}
        <FontAwesomeIcon className={classes.icon} icon={faArrowRight} />
      </span>
      {subtitle && <span className={classes.subtitle}>{subtitle}</span>}
    </button>
  );
}

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

export default CardButton;
