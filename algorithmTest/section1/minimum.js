function solution(arr) {
	let min = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	return min;
}

function solution1(arr) {
	return Math.min(...arr);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2
console.log(solution1([5, 3, 7, 11, 2, 15, 17])); // 2
