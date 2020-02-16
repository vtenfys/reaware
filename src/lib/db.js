import PouchDB from "pouchdb";
PouchDB.plugin(require("pouchdb-adapter-idb"));

export const db = new PouchDB("card_db", { adapter: "idb" });
