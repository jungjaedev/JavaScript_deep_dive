function solution(day, arr) {
	let cnt = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 10 === day) {
			cnt++;
		}
	}
	return cnt;
}

const day1 = 3;
const arr1 = [25, 23, 11, 47, 53, 17, 33];

const day2 = 0;
const arr2 = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(day1, arr1));
console.log(solution(day2, arr2));
