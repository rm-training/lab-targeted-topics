const privateVal = 10;

// this.onmessage; like setting the property on DOM element
onmessage = function(e) {  
  let result = e.data[0] * e.data[1];
  
  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    let workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }
}

// Or you can register multiple handlers 
// addEventListener('message', event => {
//   console.log('From handler 1', event.data)
//   postMessage('hey')
// }, false);

// addEventListener('message', event => {
//   console.log(`I'm curious and I'm listening too`)
// }, false);

// addEventListener('error', event => {
//   console.log(event.message)
// }, false);
