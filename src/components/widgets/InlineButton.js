import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUseStyles } from "react-jss";

import { colors, lighten, darken, rem } from "../../lib/css";

const useStyles = createUseStyles({
  button: ({ color }) => ({
    backgroundColor: color,
    color: colors.light,

    borderRadius: 4,
    border: "none",
    height: 24,
    lineHeight: "24px",
    padding: [0, 10],

    fontSize: rem(12),
    fontWeight: 700,
    cursor: "pointer",

    "&:hover, &:focus": {
      backgroundColor: lighten(color),
    },

    "&:active": {
      backgroundColor: darken(color),
    },
  }),

  icon: ({ iconPosition }) => ({
    marginRight: iconPosition === "left" ? 10 : 0,
    marginLeft: iconPosition === "right" ? 10 : 0,
  }),
});

function InlineButton({
  text,
  icon,
  iconPosition = "right",
  color = colors.secondary,
  onClick,
}) {
  const classes = useStyles({ color, iconPosition });

  return (
    <button className={classes.button} onClick={onClick}>
      {iconPosition === "right" && text}
      {icon && <FontAwesomeIcon className={classes.icon} icon={icon} />}
      {iconPosition === "left" && text}
    </button>
  );
}

InlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default InlineButton;
