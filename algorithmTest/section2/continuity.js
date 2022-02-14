function solution(arr) {
	let answer = 0;
	let cor = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === 1) {
			cor++;
		}
		else if(arr[i] === 0) {
			cor = 0;
		}
		answer += cor;
	}
	return answer;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
