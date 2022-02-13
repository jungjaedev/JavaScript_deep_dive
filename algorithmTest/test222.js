function solution(arr) {
	let answer = arr.filter((value, index) => {
		if(arr.indexOf(value) === index) {
			return true;
		}
	})
	return answer
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));
