import React, {
  useRef,
  useReducer,
  useEffect,
  useContext,
  useMemo,
} from "react";
import PropTypes from "prop-types";

import { configDB } from "./db";

let ready = false;
let error = null;
let initialConfig;

const defaultConfig = {
  _id: "config",
  name: "David",
};

async function loadInitialConfig() {
  try {
    initialConfig = await configDB.get("config");
  } catch (e) {
    // treat other errors as real ones
    if (e.status !== 404) {
      error = e;
      throw e;
    }

    const { rev } = await configDB.put(defaultConfig);
    initialConfig = { ...defaultConfig, _rev: rev };
  }

  ready = true;
}

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    default:
      throw new Error();
  }
}

const ConfigContext = React.createContext();

export function ConfigProvider({ children }) {
  if (error !== null) {
    throw error;
  }

  if (!ready) {
    throw loadInitialConfig();
  }

  const isInitial = useRef(true);
  const lastRev = useRef(initialConfig._rev);
  const [config, dispatch] = useReducer(reducer, initialConfig);

  // commit to the database when config changes
  useEffect(() => {
    async function commit() {
      // TODO: put in queue
      // TODO: handle errors

      const { rev } = await configDB.put({ ...config, _rev: lastRev.current });
      lastRev.current = rev; // store current revision for next commit
    }

    // only commit on changes
    if (isInitial.current) {
      isInitial.current = false;
    } else {
      commit();
    }
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
