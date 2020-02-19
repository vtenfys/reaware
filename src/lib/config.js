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

const ConfigContext = React.createContext();
const initialConfig = getInitialConfig();

function reducer(state, action) {
  switch (action.type) {
    case "completeFirstRun": {
      return { ...state, firstRun: false, name: action.name };
    }
    case "applySettings": {
      const { settings } = action;
      return { ...state, name: settings.name };
    }
    default: {
      throw new Error("Invalid action type");
    }
  }
}

export function ConfigProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialConfig);

  // commit config to local storage
  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(state));
  }, [state]);

  // see https://hswolff.com/blog/how-to-usecontext-with-usereducer/#performance-concerns
  const contextValue = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);

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
