import { useEffect } from "react";

const promiseMap = new WeakMap();

function usePromise(promise) {
  let data = promiseMap.get(promise);
  if (data === undefined) {
    data = { status: "pending" };
    promiseMap.set(promise, data);
  }

  useEffect(() => {
    // cleanup: free map memory
    return () => {
      promiseMap.delete(promise);
    };
  }, [promise]);

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

export default usePromise;
