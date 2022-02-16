function solution(arr) {
  let max = 0;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = parseInt(arr[i] / 100) + (parseInt(arr[i] / 10) % 10) + (arr[i] % 10);
    if (sum >= max) {
      max = sum;
      answer = arr[i];
    }
  }
  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 197, 123]));
