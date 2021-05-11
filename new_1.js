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


//object

const superman = {
  name : 'clark',
  age : 30,
}

superman.hairColor = 'blue';
superman['hobby'] = 'baseball';
delete superman.age;
console.log(superman)

function makeObject(name, age){
  return {
    name,
    age,
    hobby : 'football',
  }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);


//  객체 in
console.log('age' in Mike);
console.log('birthday' in Mike);

function isAdult(user) {
  if(!('age' in user) || user.age < 20) {
    return false;
  } 
  return true;
}

const Mike = {
  name : 'Mike',
  age:30,
}

const Jane = {
  name: "Jane"
};

console.log(isAdult(Jane))

//객체 for ... in

const Mike = {
  name: "Mike",
  age: 30,
  hobby: 'soccer'
};

for(x in Mike){
  console.log(Mike[x]) 
}

// 조건문 ex13

function convertScoreToGradeWithPlusAndMinus(score) {
  // TODO: 여기에 코드를 작성합니다.
  if (score > 100 || score < 0){
    return 'INVALID SCORE';
  }
  if (score === 100) {
    return 'A+';
  };
  if (score < 60) {
    return 'F';
  }
  let num1, num2, gd, pm;
  num1 = parseInt(score / 10);
  num2 = score % 10;
  
  if (num1 === 6) {
    gd = 'D';
  } else if (num1 === 7) {
    gd = 'C';
  } else if (num1 === 8) {
    gd = 'B';
  } else if (num1 === 9) {
    gd = 'A';
  } 

  if (num2 % 10 >= 0 && num2 % 10 <= 2 ) {
    pm = '-';
  } else if (num2 % 10 >= 3 && num2 % 10 <= 7 ) {
    pm = '';
  } else {
    pm = '+';
  }
  return gd + pm;
}

// ex14
// 1. Math.pow(num1,num2)
// 2. num1 ** num2
// 3. num*num

function isPythagorean(side1, side2, side3) {
  const pow1 = side1 * side1;
  const pow2 = side2 ** 2;
  const pow3 = Math.pow(side3, 2);

  if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
    return true;
  }

  return false;
}

//   // e1 e2 => boolean값
  // 0 0 이면 false '||'
  // 0 1 , 1 0, 1 1,이면 true
  if (expression1 ===false &&  expression2 === !true) {
    return false;
  } else {
    return true;
  }
