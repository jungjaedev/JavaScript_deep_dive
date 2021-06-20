// const animals = [
//   { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
//   { name: 'monkey', size: 'medium', isAggressive: true, weight: 20 },
//   { name: 'cat', size: 'small', isAggressive: false, weight: 10 },
//   { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
// ];
// animals.reverse
// // animals.forEach(function (animal, index) {
// //   console.log(`${index} ${animal.size}`);
// // });

// // //map을 사용하면 새로운 배열 재생산
// // const animalsNames = animals.map(function (animal) {
// //   return `${animal.name} is ${animal.size}`;
// // });

// // console.log(animalsNames);

// // // filter
// // const smallAnimals = animals.filter(function (item) {
// //   return item.size === 'small';
// // });

// // console.log(smallAnimals);

// // reduce
// const totalweight = animals.reduce(function (acc, cur) {
//   return acc + cur.weight;
// }, 0); //0은 초기값
// console.log(totalweight);

// // const numbers = [1, 10, 15, 23, 123];

// // const total = numbers.reduce(function (sum, number) {
// //   console.log(sum, number);
// //   return sum + number;
// // });

// // console.log(total);

function or(arr) {
  return arr.length === 0 ? false : arr[0] || or(arr.slice(1));
}

function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
}

function fibonacci(num) {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

function findMatryoshka(matryoshka, size) {
  if (matryoshka.size === size) return true;
  else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }
  return false;
}

function browserStack(actions, start) {
  let prev = [];
  let next = [];
  let now = start;

  for (let i = 0; i < actions.length; i++){
    if(actions[i] === -1 && prev.length > 0){
      let nowpage = prev.pop(); 
      next.push(now)
      now = nowpage
    } else if(actions[i] === 1 && next.length > 0) {
      let nowpage2 = next.pop();
      prev.push(now);
      now = nowpage2
    } else {              
      prev.push(now); [ba]d[c]
      now = actions[i];
      next = [];
    }
  }
  return [prev, now, next]
}

function improveBook(books, speeds) {
  let days = [];
  let count = 1;
  let answer = [];
  // 100될때까지. 날짜 구하는 반복문
  for (let i = 0; i < books.length; i++){
    while(books[i] + speeds[i] * count < 100) {
      count++;
    }
    days.push(count);
    count = 1
  } // [ ]

  while (days.length > 0) {
    f_index = days.findIndex(i => i > days[0])
    if(f_index === -1) {
      answer.push(days.length);
      days.splice(0, days.length);
    } else {
      answer.push(f_index);
      days.splice(0, f_index);
    }
  }
  return answer;
}

function queuePrinter(bufferSize, capacities, documents) {
  let work = [];
  let sec = 0;

  for (let i=0; i < bufferSize; i++){
    work.push(0);
  }
  let sum = 0;

  while(documents.length > 0){
    work.pop();
    sum = 0;
    for(let j=0; j < work.length; j++){
      sum += work[j];
    }
    
    let temp = documents.shift();
    if(temp + sum <= capacities){
      work.unshift(temp);
    }else{
      work.unshift(0);
      documents.unshift(temp)
    }
    sec++; 
  }

   while(work.length){
      work.pop();
      sec++
    }
  return sec;
}

function connectedVertices(edges) {

	// 최대 버텍스를 찾습니다.
	const maxVertex = edges.reduce((a, c) => {
		const bigger = Math.max(...c);
		if (bigger > a) return bigger;
		return a;
	}, 0);

	// 이 레퍼런스는 인접 리스트로 만듭니다. (행렬도 가능합니다. 행렬로 작성해 보세요.)
	const adjList = {};

  // 인접 리스트에 최대 버텍스 크기만큼 반복해 버텍스를 만들어 줍니다.
	for (let i = 0; i <= maxVertex; i++) {
		adjList[i] = [];
	}

  // edges를 순회하며, (무향 그래프이므로 쌍방으로) 간선을 연결해 줍니다.
	// 이렇게 adjList 그래프가 완성되었습니다.
	for (let i = 0; i < edges.length; i++) {
		adjList[edges[i][0]].push(edges[i][1]);
		adjList[edges[i][1]].push(edges[i][0]);
	}

  // 방문한 버텍스를 담을 객체를 선언합니다.
	const visited = {};
	// 컴포넌트가 몇 개인지 카운트할 변수를 선언합니다.
	let count = 0;

  // 그래프에 있는 버텍스를 전부 순회합니다.
	for (let vertex = 0; vertex <= maxVertex; vertex++) {

		// 만약 i 번째 버텍스를 방문하지 않았다면 bfs로 해당 버텍스와, 버텍스와 연결된(간선) 모든 버텍스를 방문합니다.
		// BFS로 갈 수 있는 모든 정점들을 방문하며 visited에 담기 때문에, 방문한 버텍스는 visited에 들어 있어서 bfs를 돌지 않습니다.
		// 이렇게 컴포넌트를 확인합니다.
		if (!visited[vertex]) {
			// 그래프와 버텍스, 방문했는지 확인할 visited를 변수에 담습니다.
			bfs(adjList, vertex, visited);

			// 카운트를 셉니다.
			count++;
		}
	}

  // 카운트를 반환합니다.
	return count;
}


// bfs solution
function bfs(adjList, vertex, visited) {

	// bfs는 가장 가까운 정점부터 탐색하기 때문에 queue를 사용합니다.
	// queue에 vertex를 담습니다.
	const queue = [vertex];
	// 해당 버텍스를 방문했기 때문에 visited에 담아 주고, 방문했다는 표시인 true를 할당합니다.
	visited[vertex] = true;

  // queue의 길이가 0일 때까지 순환합니다.
	while (queue.length > 0) {

		// cur 변수에 정점을 할당합니다.
		// queue는 선입선출이기 때문에 shift 메소드를 사용하여 버텍스를 가져옵니다.
		const cur = queue.shift();

		// 그래프의 cur 정점에 있는 간선들을 전부 순회합니다.
		for (let i = 0; i < adjList[cur].length; i++) {

			// 만약, 해당 버텍스를 방문하지 않았다면 queue에 삽입합니다.
			// 방문했다는 표시로 visited에 해당 버텍스를 삽입하고 true를 할당합니다.
			if (!visited[adjList[cur][i]]) {
				queue.push(adjList[cur][i]);
				visited[adjList[cur][i]] = true;
			}

			// queue에 다음으로 방문할 버텍스가 있기 때문에 while은 멈추지 않습니다.
			// 만약, queue가 비어 있다면 더 이상 갈 곳이 없는 것이기 때문에 bfs 함수를 종료하고 카운트를 셉니다.
		}
	}
}

// dfs solution
// bfs 함수 대신 dfs를 사용해도 결과는 같습니다.
function dfs(adjList, vertex, visited) {
	// 해당 버텍스에 방문했다는 표시로 visited key에 vertex를 담고 값에 true를 할당합니다.
	visited[vertex] = true;

	// 해당 버텍스의 모든 간선들을 전부 순회합니다.
	for (let i = 0; i < adjList[vertex].length; i++) {

		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
		if (!visited[adjList[vertex][i]]) {
			// dfs를 호출해(재귀) 방문합니다.
			dfs(adjList, adjList[vertex][i], visited);
		}
		// 모든 방문이 종료되면 다음 버텍스를 확인합니다.
		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 셉니다. 
	}
}

function createMatrix(edges) {
	// TODO: 여기에 코드를 작성합니다.
  let result = [];
  let maxNumber = 0;

  for(let i = 0; i < edges.length; i++){
    if(edges[i][0] > maxNumber){
      maxNumber = edges[i][0]
    } 
  }
  for(let i = 0; i < edges.length; i++){
    if(edges[i][1] > maxNumber){
      maxNumber = edges[i][1]
    }
  }

  for(let i = 0; i < maxNumber+1; i++) {
    result.push(new Array(maxNumber + 1).fill(0));
  }
  // maxNumber = Math.max(...edges.flat()); 
  
  // result = new Array(maxNumber+1).fill(0).map(e => new Array(maxNumber+1).fill(0));

  for(let i = 0; i < edges.length; i++){
    if(edges[i][2] === "directed"){
      result[edges[i][0]][edges[i][1]] = 1;
      console.log(edges[i][0],edges[i][1])
    }
    else if(edges[i][2] === "undirected"){
      result[edges[i][0]][edges[i][1]] = 1;
      result[edges[i][1]][edges[i][0]] = 1;
      console.log(edges[i][0],edges[i][1])
    }
  }
  return result;
}

function solution(s){
  var answer = true;
  let cnt_p=0;
  let cnt_y =0;
  
  let str = s.toLowerCase();
  for (let i = 0; i < str.length;i++){
      if(str[i] === 'p') cnt_p++;
      else if(str[i] === 'y') cnt_y++;
  }
  
  if(cnt_p !== cnt_y) answer = false;
 

  return answer;
}

function solution(n) {
  var answer = [];
  let str = n.toString()
  for (let i = str.length-1; i >= 0;i--){
      answer.push(Number(str[i]))
  }
  return answer;
}

function solution(n) {
  var answer = 0;
  let str = n.toString().split('').sort((a,b)=>b-a).join('')
  answer = parseInt(str)
  return answer;
}

const bubbleSort = function (arr) {
  function swap(idx1,idx2,arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  
  for(let i = 0; i < arr.length; i++) {
    let swaps = 0;  
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j+1]) {
        swap(j, j+1, arr);
        swaps++;
      }
    }
    if(swaps === 0) break;
  }
  return arr
};
