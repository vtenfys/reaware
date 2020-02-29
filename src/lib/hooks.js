import { useState, useEffect, useMemo } from "react";
import * as translatedStrings from "../lib/translations";

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

export function useStrings() {
  const preference = navigator.language;

  const attemptLanguages = useMemo(() => {
    const langs = [preference];

    // search for translations in the generic language variant
    // if `preference` is a region-specific variant
    if (preference.length > 2) {
      langs.push(preference.substring(0, 2));
    }

    // fallback to English strings
    if (!langs.includes("en")) {
      langs.push("en");
    }

    return langs;
  }, [navigator.language]);

  const strings = useMemo(() => {
    const get = (_, key) => {
      const translations = translatedStrings[key];

      // go through languages until we find a
      // translation in one of those languages
      for (const lang of attemptLanguages) {
        if (translations[lang] !== undefined) {
          return translations[lang];
        }
      }
    };

    return new Proxy({}, { get });
  }, [attemptLanguages]);

  return strings;
}
