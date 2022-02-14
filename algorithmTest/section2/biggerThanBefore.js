function solution(arr) {
	let answer = [];
	let preNum = 0;
	for(let i = 0; i < arr.length; i++) {
		if(preNum < arr[i]) answer.push(arr[i]);
		preNum = arr[i];
	}
	return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
