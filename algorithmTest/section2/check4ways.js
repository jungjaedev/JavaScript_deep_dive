function solution (arr) {
	let answer = 0;
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];
	let len = arr.length;
	let flag;
	for(let i = 0; i < len; i++) {
		for(let j = 0; j < len; j++) {
			flag = 0;
			for(let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				if(nx >= 0 && nx < len && ny >= 0 && ny < len && arr[i][j] <= arr[nx][ny]) {
					flag = 1;
					break;
				}
			}
			if(flag) answer++;
		}
	}
	return answer;
}

let arr = [
	          [5, 3, 7, 2, 3],
			          [3, 7, 1, 6, 1],
					          [7, 2, 5, 3, 4],
							          [4, 3, 6, 4, 1],
									          [8, 7, 3, 5, 2],
											        ];
													      console.log(solution(arr));
