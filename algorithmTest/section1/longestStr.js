function solution(arr) {
	answer = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if(answer.length < arr[i].length) {
			answer = arr[i]
		}
	}
	return answer;
}

const strArr = ['teacher', 'tiem', 'student', 'beautiful', 'good'];
console.log(solution(strArr));
