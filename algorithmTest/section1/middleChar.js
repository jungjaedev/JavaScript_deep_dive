function solution(str) {
	let len = str.length;
	let answer = '';
	if(len % 2 === 1) {
		answer += str[parseInt(len/2)];
	} else {
		answer += str[len/2-1] + str[len/2];
	}
	return answer;
}

console.log(solution('study'));
console.log(solution('good'));
