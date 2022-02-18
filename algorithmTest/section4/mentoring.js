function solution(test) {
	let answer;
	m = test.length; // 시험 수
	n = test[0].length; //학생 수
	for(let i = 1; i <= n; i++) {
		for(let j = 1; j <= n; j++) {
			for(let k = 0; k < m; k++) {
				let pi = 0;
				let pj = 0;
				for(let s = 0; s < n; s++) {
					if(test[k][s] === i) pi = s;
					if(tset[k][s] === j) pj = s;
				}
				if(pi < pj) cnt++;
			}
		}
	}

	return answer;
}

let arr = [
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
];
console.log(solution(arr));
