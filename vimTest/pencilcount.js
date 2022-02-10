function solution(num) {
	let pencil = 1;
	let cnt = 0;
	while(pencil < num) {
		pencil += 12;
		cnt++;
	}
	return cnt;
}

function solution2(num) {
	return Math.ceil(num / 12);
}

console.log(solution(178));
console.log(solution2(120))


