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

let initialConfig = {
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

    await configDB.put(initialConfig);
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
  const [config, dispatch] = useReducer(reducer, initialConfig);

  // commit to the database when config changes
  useEffect(() => {
    async function commit() {
      // TODO: put in queue
      // TODO: handle errors
      const { _id, _rev } = await configDB.get("config");
      await configDB.put({ ...config, _id, _rev });
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
