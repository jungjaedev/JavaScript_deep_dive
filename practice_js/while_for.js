//ex01
function findTheBug(word) {
  for(let i = 0; i < word.length;i++){
    if (word[i] === '#') {
      return i;
    }
  }
  return;
}

//ex02
function sumTo(num) {
  let result = 0;
  for(let i = 0; i <= num;i++){
    result = result + i;
  }
  return result
}


//ex03
function isOdd(num) {
  
  let i = Math.abs(num);
  while (i > 0) {
    i = i - 2;
    if (i === 1) {
      return true;
    }
  }
  return false;
}

//ex04
function factorial(num) {
  // TODO: 여기에 코드를 작성합니다.
 
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  } 
  return result
}

//ex05
function repeatString(str, num) {
  let result = '';

  if (str === '') {
    return result;
  }

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

//ex06
function makeDigits(num) {
  // TODO: 여기에 코드를 작성합니다.
  let result = '';

  for(let i = 1; i <= num; i++) {
    result = result + i 
  }
  return result;
}

//ex07
function makeDigits2(num) {
  let result = '1';

  let i = 2;
  while (i <= num) {
    result = result + '-' + String(i);
    i++;
  }
  return result;
}

// ex08
function makeOddDigits(num) {
  let result = '', i = 1;
  let int_2 = 0;
  while (int_2 < num) {
    result = result + `${i}`;
    i += 2;
    int_2++;
  }
  return result
}

//ex09
function makeMultiplesOfDigit(num) {
  let result = '';

  for (let i = 3; i <= num; i += 3) {
    result = result + `${i}`
  }
  return result;
}

//ex10

  // num1 <= ~~ <= num2 사이에 2의 배수의 개수
  // small, big에 num1 num2할당 
  // 만약 num1 > num2 이면 바꿔준다
  // samll 부터 big까지 2의배수(짝수) count 
  function makeMultiplesOfDigit2(num1, num2) {
    let small = 0;
    let big = 0;
    let result = 0;
    
    if (num1 < num2) {
      small = num1;
      big = num2;
    } else {
      small = num2;
      big = num1;
    }
  
    if (small === 0) {
      small = 1;
    }
  
    for (let i = small; i <= big; i++) {
      if(i % 2 === 0) {
        result++;
      }    
    }
    return result;
  }
  
  

//ex11
function countCharacter(str, letter) {
  let result = 0;
  
  for(let i = 0;i < str.length; i++) {
    if (str[i] === letter) {
      result++;
    }
  }
  return result++;
}

//ex12
function getMaxNumberFromString(str) {
  // str[i] 와 num 비교 후 크면 num에다 넣어주고 
  // 아니면 다음 번째 수와 비교
  
  let result = 0;

  if (str === '') {
    return '0';
  }

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > Number(result)) {
      result = str[i]
    }
  }
  return String(result)
}

//ex13
function replaceAll(str, from, to) {
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if (str[i] === from){
      result = result + to;
    } else {
      result = result + str[i]
    }
  }
  return result;
}

//ex14
function characterAndNumber(word) {
  let result = '';

  for(let i = 0; i < word.length; i++){
    result = result + word[i];
    result = result + i;
  }
  return result;
}

// ex15
function computePower(base, exponent) {
  let result = 1;

  for (let i = 0;i < exponent;i++){
    result = result * base;
  }
  return result
}

//ex16
function getSumOfFactors(num) {
  //약수 => 12 % n === 0 

  let addResult = 0;

  for (let i = 0;i <= num; i++) {
    if (num % i === 0) {
      addResult += i;
    }  
  }
  return addResult;
}

//ex17
function isPrime(num) {
  // 1은 false, 2, 3은 true
  // 2로 나누면 false
  // 3부터 1씩 증가해서 나누어봄
  // 제곱근num까지만 진행

  if (num === 1) {
    return false;
  }

  if (num === 2 || num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

//ex18




