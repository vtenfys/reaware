import { useEffect } from "react";

const promiseMap = new WeakMap();
export function usePromise(promise) {
  let data = {};
  if (promiseMap.has(promise)) {
    data = promiseMap.get(promise);
  } else {
    promiseMap.set(promise, data);
  }

  useEffect(() => {
    return () => {
      promiseMap.delete(promise);
    };
  }, [promise]);

  data.status = data.status ?? "pending";

  if (data.status === "pending") {
    data.suspender =
      data.suspender ??
      promise
        .then(result => {
          data.status = "success";
          data.result = result;
        })
        .catch(error => {
          data.status = "error";
          data.result = error;
        });

    throw data.suspender;
  }

  if (data.status === "error") {
    throw data.result;
  }

  return data.result;
}
