// // const animals = [
// //   { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
// //   { name: 'monkey', size: 'medium', isAggressive: true, weight: 20 },
// //   { name: 'cat', size: 'small', isAggressive: false, weight: 10 },
// //   { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
// // ];
// // animals.reverse
// // // animals.forEach(function (animal, index) {
// // //   console.log(`${index} ${animal.size}`);
// // // });

// // // //map을 사용하면 새로운 배열 재생산
// // // const animalsNames = animals.map(function (animal) {
// // //   return `${animal.name} is ${animal.size}`;
// // // });

// // // console.log(animalsNames);

// // // // filter
// // // const smallAnimals = animals.filter(function (item) {
// // //   return item.size === 'small';
// // // });

// // // console.log(smallAnimals);

// // // reduce
// // const totalweight = animals.reduce(function (acc, cur) {
// //   return acc + cur.weight;
// // }, 0); //0은 초기값
// // console.log(totalweight);

// // // const numbers = [1, 10, 15, 23, 123];

// // // const total = numbers.reduce(function (sum, number) {
// // //   console.log(sum, number);
// // //   return sum + number;
// // // });

// // // console.log(total);

// function or(arr) {
//   return arr.length === 0 ? false : arr[0] || or(arr.slice(1));
// }

// function factorial(num) {
//   return num <= 1 ? 1 : num * factorial(num - 1);
// }

// function fibonacci(num) {
//   return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
// }

// function findMatryoshka(matryoshka, size) {
//   if (matryoshka.size === size) return true;
//   else if (matryoshka.matryoshka && matryoshka.size > size) {
//     return findMatryoshka(matryoshka.matryoshka, size);
//   }
//   return false;
// }

// function browserStack(actions, start) {
//   let prev = [];
//   let next = [];
//   let now = start;

//   for (let i = 0; i < actions.length; i++){
//     if(actions[i] === -1 && prev.length > 0){
//       let nowpage = prev.pop();
//       next.push(now)
//       now = nowpage
//     } else if(actions[i] === 1 && next.length > 0) {
//       let nowpage2 = next.pop();
//       prev.push(now);
//       now = nowpage2
//     } else {
//       prev.push(now); [ba]d[c]
//       now = actions[i];
//       next = [];
//     }
//   }
//   return [prev, now, next]
// }

// function improveBook(books, speeds) {
//   let days = [];
//   let count = 1;
//   let answer = [];
//   // 100될때까지. 날짜 구하는 반복문
//   for (let i = 0; i < books.length; i++){
//     while(books[i] + speeds[i] * count < 100) {
//       count++;
//     }
//     days.push(count);
//     count = 1
//   } // [ ]

//   while (days.length > 0) {
//     f_index = days.findIndex(i => i > days[0])
//     if(f_index === -1) {
//       answer.push(days.length);
//       days.splice(0, days.length);
//     } else {
//       answer.push(f_index);
//       days.splice(0, f_index);
//     }
//   }
//   return answer;
// }

// function queuePrinter(bufferSize, capacities, documents) {
//   let work = [];
//   let sec = 0;

//   for (let i=0; i < bufferSize; i++){
//     work.push(0);
//   }
//   let sum = 0;

//   while(documents.length > 0){
//     work.pop();
//     sum = 0;
//     for(let j=0; j < work.length; j++){
//       sum += work[j];
//     }

//     let temp = documents.shift();
//     if(temp + sum <= capacities){
//       work.unshift(temp);
//     }else{
//       work.unshift(0);
//       documents.unshift(temp)
//     }
//     sec++;
//   }

//    while(work.length){
//       work.pop();
//       sec++
//     }
//   return sec;
// }

// function connectedVertices(edges) {

// 	// 최대 버텍스를 찾습니다.
// 	const maxVertex = edges.reduce((a, c) => {
// 		const bigger = Math.max(...c);
// 		if (bigger > a) return bigger;
// 		return a;
// 	}, 0);

// 	// 이 레퍼런스는 인접 리스트로 만듭니다. (행렬도 가능합니다. 행렬로 작성해 보세요.)
// 	const adjList = {};

//   // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다.
// 	for (let i = 0; i <= maxVertex; i++) {
// 		adjList[i] = [];
// 	}

//   // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
// 	// 이렇게 adjList 그래프가 완성되었습니다.
// 	for (let i = 0; i < edges.length; i++) {
// 		adjList[edges[i][0]].push(edges[i][1]);
// 		adjList[edges[i][1]].push(edges[i][0]);
// 	}

//   // 방문한 버텍스를 담을 객체를 선언합니다.
// 	const visited = {};
// 	// 컴포넌트가 몇 개인지 카운트할 변수를 선언합니다.
// 	let count = 0;

//   // 그래프에 있는 버텍스를 전부 순회합니다.
// 	for (let vertex = 0; vertex <= maxVertex; vertex++) {

// 		// 만약 i 번째 버텍스를 방문하지 않았다면 bfs로 해당 버텍스와, 버텍스와 연결된(간선) 모든 버텍스를 방문합니다.
// 		// BFS로 갈 수 있는 모든 정점들을 방문하며 visited에 담기 때문에, 방문한 버텍스는 visited에 들어 있어서 bfs를 돌지 않습니다.
// 		// 이렇게 컴포넌트를 확인합니다.
// 		if (!visited[vertex]) {
// 			// 그래프와 버텍스, 방문했는지 확인할 visited를 변수에 담습니다.
// 			bfs(adjList, vertex, visited);

// 			// 카운트를 셉니다.
// 			count++;
// 		}
// 	}

//   // 카운트를 반환합니다.
// 	return count;
// }

// // bfs solution
// function bfs(adjList, vertex, visited) {

// 	// bfs는 가장 가까운 정점부터 탐색하기 때문에 queue를 사용합니다.
// 	// queue에 vertex를 담습니다.
// 	const queue = [vertex];
// 	// 해당 버텍스를 방문했기 때문에 visited에 담아 주고, 방문했다는 표시인 true를 할당합니다.
// 	visited[vertex] = true;

//   // queue의 길이가 0일 때까지 순환합니다.
// 	while (queue.length > 0) {

// 		// cur 변수에 정점을 할당합니다.
// 		// queue는 선입선출이기 때문에 shift 메소드를 사용하여 버텍스를 가져옵니다.
// 		const cur = queue.shift();

// 		// 그래프의 cur 정점에 있는 간선들을 전부 순회합니다.
// 		for (let i = 0; i < adjList[cur].length; i++) {

// 			// 만약, 해당 버텍스를 방문하지 않았다면 queue에 삽입합니다.
// 			// 방문했다는 표시로 visited에 해당 버텍스를 삽입하고 true를 할당합니다.
// 			if (!visited[adjList[cur][i]]) {
// 				queue.push(adjList[cur][i]);
// 				visited[adjList[cur][i]] = true;
// 			}

// 			// queue에 다음으로 방문할 버텍스가 있기 때문에 while은 멈추지 않습니다.
// 			// 만약, queue가 비어 있다면 더 이상 갈 곳이 없는 것이기 때문에 bfs 함수를 종료하고 카운트를 셉니다.
// 		}
// 	}
// }

// // dfs solution
// // bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
// function dfs(adjList, vertex, visited) {
// 	// 해당 버텍스에 방문했다는 표시로 visited key에 vertex를 담고 값에 true를 할당합니다.
// 	visited[vertex] = true;

// 	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
// 	for (let i = 0; i < adjList[vertex].length; i++) {

// 		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
// 		if (!visited[adjList[vertex][i]]) {
// 			// dfs를 호출해(재귀) 방문합니다.
// 			dfs(adjList, adjList[vertex][i], visited);
// 		}
// 		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
// 		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다.
// 	}
// }

// function createMatrix(edges) {
// 	// TODO: 여기에 코드를 작성합니다.
//   let result = [];
//   let maxNumber = 0;

//   for(let i = 0; i < edges.length; i++){
//     if(edges[i][0] > maxNumber){
//       maxNumber = edges[i][0]
//     }
//   }
//   for(let i = 0; i < edges.length; i++){
//     if(edges[i][1] > maxNumber){
//       maxNumber = edges[i][1]
//     }
//   }

//   for(let i = 0; i < maxNumber+1; i++) {
//     result.push(new Array(maxNumber + 1).fill(0));
//   }
//   // maxNumber = Math.max(...edges.flat());

//   // result = new Array(maxNumber+1).fill(0).map(e => new Array(maxNumber+1).fill(0));

//   for(let i = 0; i < edges.length; i++){
//     if(edges[i][2] === "directed"){
//       result[edges[i][0]][edges[i][1]] = 1;
//       console.log(edges[i][0],edges[i][1])
//     }
//     else if(edges[i][2] === "undirected"){
//       result[edges[i][0]][edges[i][1]] = 1;
//       result[edges[i][1]][edges[i][0]] = 1;
//       console.log(edges[i][0],edges[i][1])
//     }
//   }
//   return result;
// }

// function solution(s){
//   var answer = true;
//   let cnt_p=0;
//   let cnt_y =0;

//   let str = s.toLowerCase();
//   for (let i = 0; i < str.length;i++){
//       if(str[i] === 'p') cnt_p++;
//       else if(str[i] === 'y') cnt_y++;
//   }

//   if(cnt_p !== cnt_y) answer = false;

//   return answer;
// }

// function solution(n) {
//   var answer = [];
//   let str = n.toString()
//   for (let i = str.length-1; i >= 0;i--){
//       answer.push(Number(str[i]))
//   }
//   return answer;
// }

// function solution(n) {
//   var answer = 0;
//   let str = n.toString().split('').sort((a,b)=>b-a).join('')
//   answer = parseInt(str)
//   return answer;
// }

// const bubbleSort = function (arr) {
//   function swap(idx1,idx2,arr) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }

//   for(let i = 0; i < arr.length; i++) {
//     let swaps = 0;
//     for(let j = 0; j < arr.length - 1 - i; j++){
//       if(arr[j] > arr[j+1]) {
//         swap(j, j+1, arr);
//         swaps++;
//       }
//     }
//     if(swaps === 0) break;
//   }
//   return arr
// };

// function solution(s){
//   var answer = true;
//   let cnt_p=0;
//   let cnt_y =0;

//   let str = s.toLowerCase();
//   for (let i = 0; i < str.length;i++){
//       if(str[i] === 'p') cnt_p++;
//       else if(str[i] === 'y') cnt_y++;
//   }

//   if(cnt_p !== cnt_y) answer = false;

//   return answer;
// }

//Promise
'use strict';

Promise is a JavaScript object for asynchronous operation.
state: pending -> fulfilled or rejected
Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('won');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // 한가지만 받아오면 생략가능
  .catch(error => {
    return '🍞';
  })
  .then(egg => cook(egg))
  .then(console.log)
  .catch(console.log);

// !코딩앙마!

const f1 = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("1번 주문 완료");
      }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(new Error("err..."));
      }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("3번 주문 완료");
      }, 2000);
  });
};

f1()
  .then((resolve) => f2(resolve))
  .then((resolve) => f3(resolve))
  .then((resolve) => console.log(resolve))
  .catch(console.log);

console.log("시작");
async function order() {
  try {
      const result1 = await f1();
      const result2 = await f2(result1);
      const result3 = await f3(result2);
      console.log(result3);
  } catch (e) {
      console.log(e);
      console.log("종료");
  }
}

async function getName() {
  // return "Mike";
  // return Promise.resolve('Tom')
  throw new Error("err...");
}

getName().catch((err) => {
  console.log(err);
});

// await
function getName(name) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(name);
      }, 1000);
  });
}

async function showName() {
  const result = await getName("Mike");
  console.log(result);
}

console.log("시작");
showName();


// Promise
// !코딩앙마!
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("OK");
  }, 3000);
});

pr.then(
  function (result) {
      console.log(result + " 가지러 가자.");
  },
  function (err) {
      console.log("다시 주문해주세요..");
  }
);

// ex1)
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
      // resolve("OK");
      reject(new Error("err..."));
  }, 1000);
});

console.log("시작");
pr.then((result) => {
  console.log(result);
})
  .catch((err) => {
      console.log(err);
  })
  .finally(() => {
      console.log("끝");
  });

// ex2) 콜백 지옥
const f1 = (callback) => {
  setTimeout(function () {
      console.log("1번 주문 완료");
      callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(function () {
      console.log("2번 주문 완료");
      callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(function () {
      console.log("3번 주문 완료");
      callback();
  }, 2000);
};

console.log("시작");
f1(function () {
  f2(function () {
      f3(function () {
          console.log("끝");
      });
  });
});

// Promise Chaining

const f1 = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          // resolve("1번 주문 완료");
          reject(new Error("xx"));
      }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject("xxx");
      }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("3번 주문 완료");
      }, 2000);
  });
};

// Promise.race
// 하나만 resolve되면 그 resolve를 리턴한다.
console.time("x");
Promise.race([f1(), f2(), f3()]) //
  .then((resolve) => {
      console.log(resolve);
      console.timeEnd("x");
  });

// Promise.all(3초 소요)
// 다 보여주거나, 다 안보여줄때 사용한다.
console.time("x");
Promise.all([f1(), f2(), f3()]) //
  .then((resolve) => {
      console.log(resolve);
      console.timeEnd("x");
  });

// 6초 소요
// console.log("시작");
// f1()
//     .then((resolve) => f2(resolve))
//     .then((resolve) => f3(resolve))
//     .then((resolve) => console.log(resolve))
//     .catch(console.log)
//     .finally(() => {
//         console.log("끝");
//     });

// test
function solution(arr1, arr2) {
  var answer = [[]];
  for(let i = 0; i < arr1.length; i++){
      answer[i] = [];
      for(let j = 0; j < arr1[i].length; j++){
         answer[i].push(arr1[i][j] + arr2[i][j])
      }
  }
  return answer;
}

//별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 0; i < b; i++) {
        console.log("*".repeat(a));
    }
});

// 정수 내림차
function solution(n) {
    var answer = 0;
	    let str = n.toString().split('').sort((a,b)=>b-a).join('')
		    answer = parseInt(str)
			    return answer;
				}

// 자연수 뒤집어 배열로 만들기
function solution(n) {
    var answer = [];
	    let str = n.toString()
		    for (let i = str.length-1; i >= 0;i--){
			        answer.push(Number(str[i]))
					    }
						    return answer;
							}

// 순열
// function newChickenRecipe(stuffArr, choiceNum) {
//   // 예외처리
//   // let newArr = [];
//   // for(let i = 0; i < stuffArr.length; i++) {
//   //   let el = String(stuffArr[i]).split('')
//   //   let cnt = 0;
//   //   for(let j = 0; j < el.length; j++) {
//   //     if(el[j] === '0' && el[j+1] === '0' && el[j+2] === '0') cnt++;
//   //   }
//   //   if(cnt === 0) {
//   //     newArr.push(stuffArr[i])
//   //   }
//   // }
//   // if(newArr.length < choiceNum) return [];

//   // newArr.sort((a,b)=>a-b);




// }

function newChickenRecipe(stuffArr, choiceNum) {
  // stuffArr에서 0이 3개 이상이라면 전부 필터로 거르기.
  let freshArr = [];

  for (let i = 0; i < stuffArr.length; i++) {
    const element = String(stuffArr[i])
      .split('')
      .filter((e) => e === '0');
    if (element.length <= 2) {
      freshArr.push(stuffArr[i]);
    }
  }

  // 정렬
  freshArr.sort((a, b) => a - b);

  // 엣지 케이스 처리
  if (freshArr.length === 0 || freshArr.length < choiceNum) return [];

  // 레시피 초기화
  let result = [];

  // freshArr를 상대로 순열 구하기
  const permutation = (arr, bucket, n) => {
    if (n === 0) {
      result.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      // 하나를 초이스함
      const choice = arr[i];
      // 배열을 슬라이스함
      const sliceArr = arr.slice();
      // 초이스만 뺀다
      sliceArr.splice(i, 1);
      // 재귀
      permutation(sliceArr, bucket.concat(choice), n - 1);
    }
  };

  // 실행
  permutation(freshArr, [], choiceNum);

  // 순열의 길이 반환
  return result;
}


// 최대공약수
function divideChocolateStick(M, N) {
  let max = M;
  let min = N;

  if (M < N) {
    [max, min] = [N, M];
  }
  // 최대공약수
  function gcd(maxNum, minNum) {
    let n = 0;
    while (minNum !== 0) {
      n = maxNum % minNum;
      maxNum = minNum;
      minNum = n;
    }
    return maxNum;
  }
  let maxNum = gcd(max, min)

  let nums = [];
  for (let i = 1; i <= Math.sqrt(maxNum); i++) {
    if(maxNum % i === 0) {
      nums.push(i);
      if(i !== maxNum / i) {
      nums.push(maxNum / i);
      }
    }
  }
  nums.sort((a,b)=>a-b)
  let el = [];
  let result = [];
  for(let i = 0; i < nums.length; i++){
    el = [];
    el.push(nums[i])
    el.push(M / nums[i])
    el.push(N / nums[i])
    result.push(el)
  }
  return result
}

// 중복순열

const rockPaperScissors = function (rounds) {

  // rounds 매개변수를 임의로 넣습니다.
    // rounds 변수가 있을 경우 그대로 사용하고, 없다면 3(기본)을 사용합니다.
	  rounds = rounds || 3;
	    const rps = ['rock', 'paper', 'scissors'];

		  // 결과를 담을 배열 선언
		    const outcomes = [];

			  // 재귀를 사용할 함수 선언
			    // rounds를 넣을 변수 roundsToGo, 일회용 배열인 playedSoFar 변수를 선언합니다.

				  // 재귀를 사용하는 이유는, 배열의 모든 요소의 경우의 수를 훑기 위한 적절한 방법이기 때문입니다.
				    // 간단히 말하자면, 이 함수는 rounds 숫자를 기준으로, 일회용 배열에 rps 요소를 rounds 숫자만큼 넣게 됩니다.
					  // 이 로직을 잘 이해할 수 있을 때까지 하단의 함수 로직을 연구해야 합니다.
					    let permutate = function (roundsToGo, playedSoFar) {

						    // rounds가 0일 경우 outcones 배열에 삽입하고, 재귀에서 빠져나옵니다.
							    if (roundsToGo === 0) {
								      outcomes.push(playedSoFar);
									        return;
											    }

												    // rps 배열을 한 번씩 순회합니다.
													    for (let i = 0; i < rps.length; i++) {
														      // rps의 i번째 요소를 변수에 담아서
															        let currentPlay = rps[i];
																	      // permutate(본인)에 기존 rounds에서 하나 뺀 숫자와, 일회용 배열 playedSoFar에 currentPlay를 삽입하여 재귀를 실행합니다.
																		        // rounds에서 하나를 빼는 이유는, 일회용 배열의 크기를 rounds만큼 맞춰주기 위함입니다. [rock, rock, rock]

																				      // Q. playedSoFar.push(currentPlay)로 할 수 있을 텐데, 왜 concat을 사용할까요?
																					        permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
																							      /**
																								         * 이 재귀의 로직은 이렇습니다. 처음 실행된 반복문은 rps를 전부 순회해야 끝이 납니다.
																										        * 그러나 한 번 반복할 때마다 permutate 함수가 실행되고, rounds의 숫자는 짧아지며, playedSoFar에 요소가 계속 쌓일 것입니다.
																												       * 결국, roundsToGo가 0이 될 때까지 이 반복문은 rps[i]가 0일 것이며, playedSoFar에는 [rock, rock, rock]이 되어 outcones에 Push하고, 종료하게 됩니다.
																													          * return이 되었으니, 한 번의 재귀 호출이 끝났습니다. 마지막 호출 바로 전으로 돌아가,
																															         * for문은 i = 1을 가리키게 될 것이고, [rock, rock, paper]을 삽입한 뒤 호출을 하게 됩니다.
																																	        * roundsToGo가 0이 되어, 해당 배열은 outcomes 배열에 삽입됩니다.
																																			       * 이런 식으로 모든 호출의 반복문이 끝날 때까지 반복하며 outcomes에 경우의 수 요소들이 담기게 됩니다.
																																				          */
																																						      }
																																							    };

																																								  // 함수를 실행합니다.
																																								    permutate(rounds, []);

																																									  // outcomes를 반환합니다.
																																									    return outcomes;
																																										};


                                                                                    
                                                                            
//프로그래머스 김서방찾기
function solution(seoul) {
  var answer = '';
  // for (let i = 0; i <seoul.length;i++){
  //     if(seoul[i] === 'Kim') {
  //         answer = `김서방은 ${i}에 있다`
  //     }
  // }
  let num = seoul.indexOf('Kim');
  answer = `김서방은 ${num}에 있다`
  return answer;
}