import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: [0, "auto"],
    padding: [0, 48],
    maxWidth: 640,
  },
});

function Container({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
