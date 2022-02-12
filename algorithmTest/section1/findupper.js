function solution(str) {
	let answer = '';
	for(let i = 0; i < str.length; i++) {
		if(str[i].charCodeAt() <= 90 && str[i].charCodeAt() >= 65) {
			answer++;
		}
	}
	return answer;
}

const str = 'KoreaTimeGood';
console.log(solution(str));
