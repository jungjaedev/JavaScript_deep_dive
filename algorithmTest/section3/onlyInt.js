function solution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) answer += str[i];
  }
  return parseInt(answer);
}

console.log(solution('g0en2T0s8eSoft'));
