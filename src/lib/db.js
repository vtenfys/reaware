import PouchDB from "pouchdb";
import { useState, useEffect } from "react";

PouchDB.plugin(require("pouchdb-adapter-idb"));

export const configDB = new PouchDB("config_db", { adapter: "idb" });
export const cardDB = new PouchDB("card_db", { adapter: "idb" });

// TODO: specify a default doc to be created if one doesn't exist
export function useGet(db, docId) {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    // get current doc from database
    db.get(docId).then(doc => setDoc(doc));

    // subscribe to any changes
    const changes = db
      .changes({
        since: "now",
        live: true,
        include_docs: true,
        doc_ids: [docId],
      })
      .on("change", ({ doc }) => {
        setDoc(doc);
      });

    // cancel the subscription
    return () => changes.cancel();
  }, [db, docId]);

  return doc;
}
