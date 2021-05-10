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