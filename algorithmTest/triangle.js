function solution(a, b, c) {
	let answer = 'YES';
	let total = a + b + c;
	let longest = a;
	if(longest < b) longest = b;
	if(longest < c) longest = c;
	if(total - longest <= longest) answer = 'NO';
	return answer;
}

console.log(solution(13, 33, 17));
console.log(solution(3, 4, 5));
