// ex03 
function getLengthOfWord(word) {
  return word.length
}

// ex04
function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2 
}

//ex05
function computeAverageLengthOfWords2(word1, word2) {
  return Math.floor((word1.length + word2.length) / 2);
}

// ex06
function findShortestOfThreeWords(word1, word2, word3) {
  //( word1 < word2 ) < word3
  if (word1.length <= word2.length) {
    if (word1.length <= word3.length) {
      return word1;
    } else {
      return word3;
    }
  } else {
    if(word2.length <= word3.length) {
      return word2;
    } else {
      return word3;
    }
  }
}

// ex07
function isOddLength(word) {
  if (word.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// ex08
function areValidCredentials(name, password) {
  if(name.length > 3 && password.length >= 8) {
    return true;
  } else {
    return false;
  }
}
// ex09
function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length, word2.length, word3.length);
}

//ex10
function takeLetters(num, str) {
  if (num >= str.length || str === '') {
    return str;
  }
  return str.substring(0, num);
}

// ex11
function dropLetters(num, str) {
  if (str.length < num) {
    return '';
  }
  return str.slice(-(str.length-num), str.length)
}

//ex12
function compareOnlyAlphabet(str1, str2) {
  if(str1.toUpperCase() === str2.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

// ex13
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return `${num1}은(는) ${num2}보다 큽니다`;
  } else if(num1 < num2) {
    return `${num1}은(는) ${num2}보다 작습니다`;
  } else {
    return '두 수는 같습니다';
  }
}

//ex14
function compareNumberStrings(numStr1, numStr2) {
  let num1, num2, biggest;
  num1 = Number(numStr1);
  num2 = Number(numStr2);
  
  if (num1 < num2) {
    biggest = num2;
  } else {
    biggest = num1;
  }
  biggest = biggest + 5;
  return String(biggest);
}

//ex15
function showTime(hour, min, sec) {
  return `현재 시각은 ${hour}시 ${min}분 ${sec}초 입니다.`
}

// ex16
function computeDifference(num1, num2) {
  let diff;
  
  if (num1 <= num2) {
    diff = num2 - num1;
  } else {
    diff = num1 - num2;
  }

  return `${num1}, ${num2}의 차이는 ${diff}입니다.`;
}

//ex17
function makeLastSeenMsg(name, period) {
  let time;
  time = parseInt(period / 60);
  if (time < 1) {
    return `${name}: ${period}분 전에 접속함`
  } else if (time >=24) {
    time = time / 24;  
    return `${name}: ${time}일 전에 접속함`
  } else {
    return `${name}: ${time}시간 전에 접속함`
  }
}

