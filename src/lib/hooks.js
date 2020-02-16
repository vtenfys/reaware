import { useState } from "react";

const prefix = "id";
let nextID = 0;

export function useUniqueID() {
  const [uniqueID] = useState(() => `${prefix}-${nextID++}`);
  return uniqueID;
}
