import { configDB } from "./db";

let ready = false;
let config = {
  _id: "config",
  name: "David",
};

export async function getConfig() {
  if (!ready) {
    try {
      config = await configDB.get("config");
    } catch (error) {
      // only catch missing doc errors
      if (error.status !== 404) throw error;
      await configDB.put(config);
    }
    ready = true;
  }

  return config;
}
