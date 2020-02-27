import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { rem } from "../../lib/css";

const useStyles = createUseStyles({
  label: ({ size }) => ({
    fontSize: rem({ sm: 18, lg: 24 }[size]),
    fontWeight: { sm: 400, lg: 700 }[size],
    display: "block",
  }),

  hint: ({ size }) => ({
    display: "block",
    fontSize: rem({ sm: 14, lg: 16 }[size]),
    fontWeight: 400,
    marginTop: { sm: 6, lg: 8 }[size],
  }),
});

function FormLabel({ type = "label", size = "sm", text, hint, ...props }) {
  const classes = useStyles({ size });
  const ElementType = type;

  return (
    <ElementType {...props} className={classes.label}>
      {text}
      {hint && <span className={classes.hint}>{hint}</span>}
    </ElementType>
  );
}

FormLabel.propTypes = {
  type: PropTypes.oneOf(["label", "p"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  text: PropTypes.string.isRequired,
  hint: PropTypes.string,
};

export default FormLabel;
