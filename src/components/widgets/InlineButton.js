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

    "&[disabled]": {
      opacity: 0.5,
      cursor: "default",
    },

    "&:hover, &:focus": {
      backgroundColor: lighten(color),
    },

    "&:active": {
      backgroundColor: darken(color),
    },
  }),

  icon: {
    marginRight: 10,
  },
});

function InlineButton({
  text,
  icon,
  color = colors.secondary,
  disabled,
  onClick,
}) {
  const classes = useStyles({ color });

  return (
    <button className={classes.button} disabled={disabled} onClick={onClick}>
      {icon && <FontAwesomeIcon className={classes.icon} icon={icon} />}
      {text}
    </button>
  );
}

InlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default InlineButton;
