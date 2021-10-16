// given a dummy asynchronous functionality
// ie: ajax()
function asyncCall(returnValue, delayMs) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(returnValue);
    }, delayMs);
  });
}

// We might chain together many promises like so
function doStuff() {
  return asyncCall(10, 100).then(function (result) {
    return asyncCall(result + 10, 100);
  }).then(function (result) {
    return asyncCall(result + 10, 100);
  }).then(function (result) {
    return asyncCall(result + 10, 100);
  });
}

doStuff().then((result) => console.log(result));