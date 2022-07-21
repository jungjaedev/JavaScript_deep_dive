// 자리 배치
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => a[1] - b[1]);
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

let arr = [
  [3, 3],
  [2, 3],
  [1, 3],
];
console.log(solution(arr));
