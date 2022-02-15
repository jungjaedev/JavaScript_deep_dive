function solution(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s !== s.split('').reverse().join('')) {
    return 'NO';
  }
  return answer;
}

let string = 'found7, time: study; Yduts; emit, 7Dnuof';
let string1 = 'found7, time: study; Yduts; emit, 7Dnuofdd';
console.log(solution(string));
console.log(solution(string1));
