import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import Container from "../core/Container";

const useStyles = createUseStyles({
  wrapper: {
    flexGrow: 1,
  },

  main: {
    padding: [32, 0],
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
    <OverlayScrollbarsComponent
      className={classes.wrapper}
      options={{ scrollbars: { autoHide: "move" } }}
    >
      <main className={classes.main}>
        <Container className={classes.container}>{children}</Container>
      </main>
    </OverlayScrollbarsComponent>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
