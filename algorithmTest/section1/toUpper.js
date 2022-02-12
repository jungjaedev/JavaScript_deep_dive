function solution(str) {
	answer = '';
	for(let i = 0; i < str.length; i++) {
		if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <=122) {
			answer += String.fromCharCode(str[i].charCodeAt() - 32)
		} else {
		answer += str[i];
		}
	}
	return answer;
	//return str.toUpperCase();
}

const str = 'ItisTimeToStudy';
console.log(solution(str));
