// Write a function that returns the number of arguments passed to the function when called.

x = findMax(1,4,5);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(arguments.length);