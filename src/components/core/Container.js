import React from "react";
import PropTypes from "prop-types";

import { createUseStyles } from "react-jss";
import cx from "classnames";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: [0, "auto"],
    padding: [0, 48],
    maxWidth: 640,
  },
});

function Container({ children, className }) {
  const classes = useStyles();
  return <div className={cx(classes.container, className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
