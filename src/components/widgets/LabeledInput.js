import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { useUniqueID } from "../../lib/hooks";
import { colors, rem } from "../../lib/css";

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

  input: ({ size }) => ({
    // Adjust width to make it look perceptibly correct -
    // the light border makes it appear slightly thinner
    width: "calc(100% + 2px)",
    margin: [0, -1],
    backgroundColor: colors.white,
    border: [2, "solid", colors.medium],
    borderRadius: 4,
    padding: 8,
    marginTop: { sm: 8, lg: 12 }[size],
    fontSize: rem({ sm: 14, lg: 16 }[size]),
    fontWeight: 700,
  }),
});

function LabeledInput({ label, hint, size = "sm", value, onChange, ...props }) {
  const classes = useStyles({ size });
  const id = useUniqueID();

  return (
    <div>
      <label htmlFor={id} className={classes.label}>
        {label}
        {hint && <span className={classes.hint}>{hint}</span>}
      </label>
      <input
        className={classes.input}
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeledInput;
