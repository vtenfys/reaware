import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { colors } from "../../lib/css";

const useStyles = createUseStyles({
  toolbar: {
    height: 40,
    padding: [8, 0],
    backgroundColor: colors.dark,
  },
});

function ToolBar({ children }) {
  const classes = useStyles();
  return <aside className={classes.toolbar}>{children}</aside>;
}

ToolBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToolBar;
