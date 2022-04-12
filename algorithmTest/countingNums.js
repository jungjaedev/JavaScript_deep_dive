function solution(arr) {
  let answer = [];
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      cnt++;
    } else {
      answer.push(arr[i]);
      answer.push(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let nums = [1, 1, 2, 2, 2, 3, 4, 4];
console.log(solution(nums)); // 12233142

// let nums2 = [1, 1, 4, 4, 4, 4, 1]; // 1344
// let newArr = nums2.slice();
// let sorted = newArr((a, b) => a - b);
// console.log(solution(nums2));
