import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

import Container from "../core/Container";

const useStyles = createUseStyles({
  main: {
    padding: [32, 0],
    overflow: "auto",
  },

  container: {
    "& > :not(:last-child)": {
      marginBottom: 32,
    },
  },
});

function Main({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Container className={classes.container}>{children}</Container>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
