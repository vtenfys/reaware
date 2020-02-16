import React, { useReducer, useEffect, useContext, useMemo } from "react";
import PropTypes from "prop-types";

function getInitialConfig() {
  const storedConfig = localStorage.getItem("config");
  if (storedConfig !== null) {
    return JSON.parse(storedConfig);
  }

  return {
    firstRun: true,
  };
}

const initialConfig = getInitialConfig();

function reducer(state, action) {
  switch (action.type) {
    case "completeFirstRun":
      return { ...state, firstRun: false, name: action.name };
    case "setName":
      return { ...state, name: action.name };
    default:
      throw new Error("Invalid action type");
  }
}

const ConfigContext = React.createContext();

export function ConfigProvider({ children }) {
  const [config, dispatch] = useReducer(reducer, initialConfig);

  // commit config to local storage
  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  // see https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns
  const contextValue = useMemo(() => {
    return { config, dispatch };
  }, [config, dispatch]);

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useConfig() {
  return useContext(ConfigContext);
}
