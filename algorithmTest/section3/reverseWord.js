function solution(str) {
	let lower = str.toLowerCase();
	for(let i = 0; i < str.length; i++) {
		if(lower[i] !== lower[str.length - 1 - i]) {
			return 'No'
		}
	}
	return 'Yes'
}

console.log(solution('gooG'));
console.log(solution('goooGG'));
