import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import FormLabel from "./FormLabel";

const useStyles = createUseStyles({
  buttons: ({ size }) => ({
    marginTop: { sm: 20, lg: 24 }[size],
    display: "flex",
    flexDirection: "column",

    "& > button:not(:last-child)": {
      marginBottom: { sm: 12, lg: 16 }[size],
    },
  }),
});

function LabeledButtonGroup({ label, hint, children, size = "sm" }) {
  const classes = useStyles({ size });

  return (
    <div>
      <FormLabel type="p" size={size} text={label} hint={hint} />
      <div className={classes.buttons}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, { size });
        })}
      </div>
    </div>
  );
}

LabeledButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  hint: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "lg"]),
};

export default LabeledButtonGroup;
