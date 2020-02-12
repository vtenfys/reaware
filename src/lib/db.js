import PouchDB from "pouchdb";
import { useState, useEffect } from "react";

PouchDB.plugin(require("pouchdb-adapter-idb"));

export const configDB = new PouchDB("config_db", { adapter: "idb" });
export const cardDB = new PouchDB("card_db", { adapter: "idb" });

export function useGet(db, docId, options = {}) {
  const [doc, setDoc] = useState(null);
  const getAndSetDoc = async () => setDoc(await db.get(docId, options));

  useEffect(() => {
    getAndSetDoc();
    const changes = db
      .changes({ since: "now", live: true, doc_ids: [docId] })
      .on("change", getAndSetDoc);

    return () => changes.cancel();
  }, [db, docId, JSON.stringify(options)]);

  return doc;
}
