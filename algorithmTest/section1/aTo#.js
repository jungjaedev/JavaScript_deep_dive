function solution(str) {
	let answer = [];
	for (let i = 0; i < str.length; i++) {
		if(str[i].charCodeAt() === 65) {
			answer. push('#');
		} else {
			answer.push(str[i]);
		}
	}
	return answer.join('');
}

const str = 'BANANA';
console.log(solution(str));
