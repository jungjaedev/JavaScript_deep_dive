function solution(arr) {
	let answer = [];
	let cnt = 0;
	for(let i = 0; i < arr.length; i++) {
		answer.push(1);
	}
	for(let j = 0; j < arr.length; j++) {
		for(let k = 0; k < arr.length; k++) {
			if(arr[j] < arr[k]) answer[j]++;
		}
	}
	return answer;
}

let score = [87, 89, 92, 100, 76];
console.log(solution(score));
