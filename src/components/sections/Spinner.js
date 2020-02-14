import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import { createUseStyles } from "react-jss";
import { rem } from "../../lib/css";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: rem(64),
  },
});

function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
}

export default Spinner;
