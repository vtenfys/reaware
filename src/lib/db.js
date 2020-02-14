import PouchDB from "pouchdb";
PouchDB.plugin(require("pouchdb-adapter-idb"));

export const configDB = new PouchDB("config_db", { adapter: "idb" });
export const cardDB = new PouchDB("card_db", { adapter: "idb" });
