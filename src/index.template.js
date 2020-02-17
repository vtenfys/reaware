import React from "react";
import ReactDOMServer from "react-dom/server";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const DOCTYPE = "<!DOCTYPE html>";

function Index({ title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <div id="app" />
        <div id="spinner">
          <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
      </body>
    </html>
  );
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function({ htmlWebpackPlugin: { options } }) {
  const element = <Index title={options.title} />;
  return DOCTYPE + ReactDOMServer.renderToStaticMarkup(element);
}
