// 연속부분수열1
function solution(k, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === k) answer++;
    while (sum >= k) {
      sum -= arr[lt];
      lt++;
      if (sum === k) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
