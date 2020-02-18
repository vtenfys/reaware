import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import { colors } from "../../lib/css";
import Container from "../core/Container";

const useStyles = createUseStyles({
  toolbar: {
    height: 40,
    padding: [8, 0],
    backgroundColor: colors.medium,
  },

  container: {
    "& > :not(:last-child)": {
      marginRight: 8,
    },
  },
});

function ToolBar({ left, right }) {
  const classes = useStyles();

  return (
    <aside className={classes.toolbar}>
      <Container direction="row" justify="space-between">
        <div className={classes.container}>{left}</div>
        <div className={classes.container}>{right}</div>
      </Container>
    </aside>
  );
}

ToolBar.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default ToolBar;
