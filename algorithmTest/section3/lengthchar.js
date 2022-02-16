function solution(str, char) {
	let answer = [];
	let p = 1000;
	for(let i = 0; i < str.length; i++) {
		if(str[i] === char) {
			p = 0;
		} else {
			p++;
		}
		answer.push(p);
	}
	for(let j = str.length-1; j >= 0; j--) {
		if(str[j] === char) {
			p = 0;
		} else {
			p++;
			if(answer[j] > p) {
				answer[j] = p
			}
		}
	}
	return answer;
}

console.log(solution('teachermode', 'e'))
