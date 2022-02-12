function solution(str) {
	let answer = '';
	for(let i = 0; i < str.length; i++) {
		if(str[i] === str[i].toLowerCase()) {
			answer += str[i].toUpperCase();
		} else {
			answer += str[i].toLowerCase();
		}
	}
	return answer;
}

console.log(solution('StuDY'))
