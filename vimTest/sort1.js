function solution(arr) {
  let sorted = arr.sort();
  let result = [
		`${sorted[0]} : ${sorted[0].length}`, 
		`${sorted[sorted.length - 1]} : ${sorted[sorted.length - 1].length}`
	];
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}


let array = ['banana', 'apple', 'orange', 'abc'];

console.log(solution(array));

//  abc : 3, orange : 6
