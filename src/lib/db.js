import PouchDB from "pouchdb";
PouchDB.plugin(require("pouchdb-adapter-indexeddb"));

export const db = new PouchDB("card_db", { adapter: "indexeddb" });
