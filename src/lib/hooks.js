export function usePromise(promise) {
  promise._status = promise._status ?? "pending";

  if (promise._status === "pending") {
    promise._suspender =
      promise._suspender ??
      promise
        .then(result => {
          promise._status = "success";
          promise._result = result;
        })
        .catch(error => {
          promise._status = "error";
          promise._result = error;
        });

    throw promise._suspender;
  }

  if (promise._status === "error") {
    throw promise._result;
  }

  return promise._result;
}
