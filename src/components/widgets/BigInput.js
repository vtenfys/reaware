import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { useUniqueID } from "../../lib/hooks";
import { colors, rem } from "../../lib/css";

const useStyles = createUseStyles({
  label: {
    fontSize: rem(24),
    fontWeight: 700,
    display: "block",
  },

  hint: {
    display: "block",
    fontSize: rem(16),
    fontWeight: 400,
    marginTop: 8,
  },

  input: {
    // Adjust width to make it look perceptibly correct -
    // the light border makes it appear slightly thinner
    width: "calc(100% + 2px)",
    margin: [0, -1],
    backgroundColor: colors.white,
    border: [2, "solid", colors.medium],
    borderRadius: 4,
    fontSize: rem(16),
    fontWeight: 700,
    padding: 8,
    marginTop: 12,
  },
});

function BigInput({ label, hint, value, onChange }) {
  const classes = useStyles();
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
      />
    </div>
  );
}

BigInput.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BigInput;
