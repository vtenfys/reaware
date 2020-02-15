export function usePromise(promise) {
  promise._status = promise._status ?? "pending";

  const suspender = promise
    .then(result => {
      promise._status = "success";
      promise._result = result;
    })
    .catch(error => {
      promise._status = "error";
      promise._result = error;
    });

  switch (promise._status) {
    case "pending":
      throw suspender;
    case "error":
      throw promise._result;
    default:
      return promise._result;
  }
}
