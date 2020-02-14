import { configDB } from "./db";

const initialConfig = {
  name: "David",
};

export async function getConfig() {
  try {
    return await configDB.get("config");
  } catch (error) {
    // only catch missing doc errors
    if (error.status !== 404) throw error;

    const config = { ...initialConfig, _id: "config" };
    await configDB.put(config);
    return config;
  }
}
