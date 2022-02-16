function solution(arr) {
	let answer = [];
	function isPrime(n) {
		if(n===1) return false;
		else if(n  === 2 || n === 3 ) return true;
		else if(n % 2 === 0) return false;
		for(let i = 3; i < n / 2; i += 2) {
			if(n % i === 0) return false;
		}
		return true
	}
	let reverse = [];
	for(let i = 0; i < arr.length; i++) {
		let res = Number(arr[i].toString().split('').reverse().join(''));
		if(isPrime(res)) answer.push(res)
	}
	return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]))
