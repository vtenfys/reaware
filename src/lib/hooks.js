import { useState, useEffect } from "react";

const prefix = "id";
let nextID = 0;

export function useUniqueID() {
  const [uniqueID] = useState(() => `${prefix}-${nextID++}`);
  return uniqueID;
}

export function useCurrentTime(interval = 1000 * 60) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  return { hour: time.getHours(), minute: time.getMinutes() };
}
