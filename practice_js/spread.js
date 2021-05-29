'use strict';

//REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

let arr = multiply(2, 1, 2, 3);
console.log(arr);
