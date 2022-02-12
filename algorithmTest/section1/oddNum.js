function solution(arr) {
	const answer = [];
	const isOdd = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 1) isOdd.push(arr[i]);
	}
	console.log('1111',isOdd)
	let sum = 0;
	for(let i = 0; i < isOdd.length; i++) {
		sum += isOdd[i];
	}
	console.log('2222', sum)
	answer.push(sum);
	let min = Number.MAX_SAFE_INTEGER;
	for(let i = 0; i < isOdd.length; i++) {
		if(min > isOdd[i]) min = isOdd[i];
	}
	answer.push(min);
	return answer;
}

const numArr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(numArr));
