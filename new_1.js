// 첫번재종이컵을 뒤집는다
// 있으면 먹는다
// 없으면 다음 종이컵을 뒤집는다
// 종이컵 수만큼 반복 

function multiplyBy2(input) {
  input = input * 2;
  return input;
}

function divideBy2(input) {
  input = input / 2;
  return input;
}

console.log(multiplyBy2(6));
console.log(divideBy2(6));

// Arrow function
let showError = function(){
  console.log('error');
}

function showError1() {
  console.log('error1');
}

showError();
showError1();

let showError2 = () => {
  console.log('error2');
}
showError2();

const sayHello = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg);
};

sayHello('Son');

const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
};

const add2 =  (num1, num2) => num1 + num2;

console.log(add(2,3));
console.log(add2(2,3));