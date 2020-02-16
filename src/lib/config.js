import { configDB } from "./db";

let ready = false;
let error = null;

let config = {
  _id: "config",
  name: "David",
};

async function loadConfig() {
  try {
    config = await configDB.get("config");
  } catch (e) {
    // treat other errors as real ones
    if (e.status !== 404) {
      error = e;
      throw e;
    }

    await configDB.put(config);
  }

  ready = true;
}

export function useConfig() {
  if (error !== null) {
    throw error;
  }

  if (!ready) {
    throw loadConfig();
  }

  return config;
}
