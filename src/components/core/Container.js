import React from "react";
import PropTypes from "prop-types";

import { createUseStyles } from "react-jss";
import cx from "classnames";

const useStyles = createUseStyles({
  container: ({ direction, justify }) => ({
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    margin: [0, "auto"],
    padding: [0, 48],
    maxWidth: 640,
  }),
});

function Container({
  children,
  className,
  direction = "column",
  justify = "normal",
}) {
  const classes = useStyles({ direction, justify });
  return <div className={cx(classes.container, className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]),
  justify: PropTypes.string,
};

export default Container;
