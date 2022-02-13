function solution(arr) {
	let answer = 0;
	let max = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i]
			answer++;
		}
	}
	return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
