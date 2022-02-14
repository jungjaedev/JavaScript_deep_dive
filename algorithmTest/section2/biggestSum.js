function solution(arr) {
	let row = col = cross1 = cross2 = answer = 0;
	for(let i = 0; i < arr.length; i++) {
		row = col = 0;
		for(let j = 0; j < arr.length; j++) {
			row += arr[i][j]
			col += arr[j][i]
		}
		answer = Math.max(answer, row, col);
	}
	for(let k = 0; k < arr.length; k++) {
		cross1 += arr[k][k];
		cross2 += arr[k][arr.length - 1 - k];
	}
	answer = Math.max(answer, cross1, cross2);
	return answer;
}

let arr = [
        [10, 13, 10, 12, 15],
		        [12, 39, 30, 23, 11],
				        [11, 25, 50, 53, 15],
						        [19, 27, 29, 37, 27],
								        [19, 13, 30, 13, 19],
										      ];
console.log(solution(arr));
