function solution(num) {
	let answer = 0;
	for(let i = 0; i <= num; i++) {
		answer += i;
	}
	return answer;
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55
