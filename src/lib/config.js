import React, {
  useRef,
  useReducer,
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";
import PropTypes from "prop-types";

import { configDB as db } from "./db";

let ready = false;
let loadError = null;
let initialConfig;

const defaultConfig = {
  _id: "config",
  name: "David",
};

async function loadInitialConfig() {
  try {
    initialConfig = await db.get("config");
  } catch (error) {
    // treat other errors as real ones
    if (error.status !== 404) {
      loadError = error;
      throw error;
    }

    const { rev } = await db.put(defaultConfig);
    initialConfig = { ...defaultConfig, _rev: rev };
  }

  ready = true;
}

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    default:
      throw new Error("Invalid action type");
  }
}

const ConfigContext = React.createContext();

export function ConfigProvider({ children }) {
  if (loadError !== null) {
    throw loadError;
  }

  if (!ready) {
    throw loadInitialConfig();
  }

  const isInitialConfig = useRef(true);
  const awaitingCommit = useRef(null);
  const lastRev = useRef(initialConfig._rev);

  const [config, dispatch] = useReducer(reducer, initialConfig);
  const [commitError, setCommitError] = useState(null);

  // bubble up errors from the commit process
  if (commitError !== null) {
    throw commitError;
  }

  // commit to the database when config changes
  useEffect(() => {
    async function commit() {
      // wait for existing commits
      if (awaitingCommit.current !== null) {
        return awaitingCommit.current.then(commit);
      }

      const { rev } = await db.put({ ...config, _rev: lastRev.current });
      lastRev.current = rev; // store current revision for next commit

      // unblock future commits
      awaitingCommit.current = null;
    }

    // only commit after changes to initial config
    if (isInitialConfig.current) {
      isInitialConfig.current = false;
    } else {
      // bubble up errors from the commit process
      awaitingCommit.current = commit().catch(setCommitError);
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
