// function boardGame(board, operation) {
//   // 현재위치 좌표
//   let current = board[0][0];
//   // UDRL 이동시 사용할 값
//   let [Y, X] = [0, 0];
//   let answer = 0;
//   const isValid = (Y, X) => Y >= 0 && Y < board.length && X >= 0 && X < board[0].length;
//   // 반복문 (operation.length만큼)
//   for (let move of operation) {
//     // 조건문 => U D R L
//     if (move === 'U') {
//       Y += -1;
//       X += 0;
//     } else if (move === 'D') {
//       Y += 1;
//       X += 0;
//     } else if (move === 'R') {
//       Y += 0;
//       X += 1;
//     } else if (move === 'L') {
//       Y += 0;
//       X += -1;
//     }
//     // 범위 벗어났는지 확인
//     if (!isValid(Y, X)) return 'OUT';
//     // 벗어나지X면 => 좌표의 값을 더해줌
//     current = board[Y][X];
//     answer += current;
//   }
//   return answer;
// }

// /** */

// function boringBlackjack(cards) {
//   let isPrime = num => {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   let cnt = 0;
//   let answer = [];
//   let tmp = Array.from({ length: 3 }, () => 0);
//   function DFS(L, s) {
//     if (L === 3) {
//       let sum = tmp[0] + tmp[1] + tmp[2];
//       if (isPrime(sum)) {
//         cnt++;
//         answer.push(tmp.slice());
//       }
//     } else {
//       for (let i = s; i < cards.length; i++) {
//         tmp[L] = cards[i];
//         DFS(L + 1, i + 1);
//       }
//     }
//   }
//   DFS(0, 0);
//   return cnt;
// }

// // 토이 matrix problem
// const spiralTraversal = function (matrix) {
//   // 각 방향마다 row와 col의 변화를 저장
//   const RIGHT = [0, 1];
//   const DOWN = [1, 0];
//   const LEFT = [0, -1];
//   const UP = [-1, 0];
//   // 각 방향을 위한 lookup table
//   const MOVES = [RIGHT, DOWN, LEFT, UP];
//   const M = matrix.length;
//   const N = matrix[0].length;
//   const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

//   let cnt = 0;
//   let row = 0,
//     col = -1;
//   let direction = 0;
//   let result = '';
//   while (cnt < M * N) {
//     const move = MOVES[direction];
//     const [rd, cd] = move;

//     row = row + rd;
//     col = col + cd;
//     while (isValid(row, col) && matrix[row][col] !== false) {
//       result = result + matrix[row][col];
//       // 한 요소를 두 번 접근하지 않게 하기 위해서, 접근된 요소를 false로 변경한다.
//       matrix[row][col] = false;
//       row = row + rd;
//       col = col + cd;
//       cnt++;
//     }
//     // row, col 이 행렬의 범위를 벗어났기 때문에,
//     // 진행된 방향의 반대로 한 칸 이동한다.
//     row = row - rd;
//     col = col - cd;

//     // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
//     direction = (direction + 1) % 4;
//   }
//   return result;
// };

// function divideChocolateStick(M, N) {
//   // 최대 공약수를 구하는 유클리드 호제법
//   const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//   const GCD = gcd(M, N);

//   let result = [];
//   // 시간 복잡도를 고려하여 최대 공약수의 약수를 구합니다.
//   for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
//     if (GCD % i === 0) {
//       result.push([i, M / i, N / i]);
//       // 최대 공약수의 제곱근 값이 iteratee보다 큰 경우
//       // GCD에 iteratee를 나눈 값이 최대 공약수의 약수가 됩니다.
//       if (i * i < GCD) {
//         let j = GCD / i;
//         result.push([j, M / j, N / j]);
//       }
//     }
//   }
//   // 최대 공약수의 약수를 오름차순으로 정렬합니다.
//   result.sort((a, b) => a[0] - b[0]);
//   return result;
// }

// /**멱집합 풀이 */
// function missHouseMeal(sideDishes) {
//   sideDishes.sort();
//   const res = [];
//   const dfs = (start = 0, arr = []) => {
//     res.push(arr);
//     for (let i = start; i < sideDishes.length; i++) {
//       dfs(i + 1, [...arr, sideDishes[i]]);
//     }
//   };
//   dfs();
//   return res;
// }

// /**bubble sort 풀이*/
// const bubbleSort = function (arr) {
//   function swap(idx1, idx2, arr) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let swaps = 0;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1, arr);
//         swaps++;
//       }
//     }
//     if (swaps === 0) break;
//   }
//   return arr;
// };

// // powerset
// const powerSet = function (str) {
//   const sorted = str.split('').sort();

//   const deduplicated = sorted.reduce((acc, item) => {
//     if (acc[acc.length - 1] === item) {
//       return acc;
//     } else {
//       return acc.concat(item);
//     }
//   });

//   let subSets = [];
//   const pickOrNot = (idx, subset) => {
//     if (idx === deduplicated.length) {
//       subSets.push(subset);
//       return;
//     }
//     pickOrNot(idx + 1, subset);
//     pickOrNot(idx + 1, subset + deduplicated[idx]);
//   };
//   pickOrNot(0, '');
//   return subSets.sort();
// };

// // graph 인접행렬 생성
// function createMatrix(edges) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];
//   let maxNumber = 0;

//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][0] > maxNumber) {
//       maxNumber = edges[i][0];
//     }
//   }
//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][1] > maxNumber) {
//       maxNumber = edges[i][1];
//     }
//   }

//   // for(let i = 0; i < maxNumber+1; i++) {
//   //   result.push(new Array(maxNumber + 1).fill(0));
//   // }
//   result = Array.from(Array(maxNumber + 1), () => Array(maxNumber + 1).fill(0));

//   // maxNumber = Math.max(...edges.flat());

//   // result = new Array(maxNumber+1).fill(0).map(e => new Array(maxNumber+1).fill(0));

//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][2] === 'directed') {
//       result[edges[i][0]][edges[i][1]] = 1;
//       console.log(edges[i][0], edges[i][1]);
//     } else if (edges[i][2] === 'undirected') {
//       result[edges[i][0]][edges[i][1]] = 1;
//       result[edges[i][1]][edges[i][0]] = 1;
//       console.log(edges[i][0], edges[i][1]);
//     }
//   }
//   return result;
// }

let encoder = new TextEncoder(); // 기본 인코딩은 'utf-8'
encoder
  .encode('코')(
    // Uint8Array(3) [236, 189, 148]

    236
  )
  .toString(2)(
    // "11101100"
    189
  )
  .toString(2)(
    // "10111101"
    148
  )
  .toString(2); // "10010100"

// merge sort
const merge = function (left, right) {
  let merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIdx >= left.length) {
      merged.push(right[rightIdx]);
      rightIdx++;
    } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return merged;
};

const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  const merged = merge(left, right);
  return merged;
};

// 삽입정렬
const insertionSort = function (arr, transform = item => item) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};

const LPS = function (str) {
  let resultStr = '';

  for (let i = 0; i <= str.length / 2; i += 1) {
    let prefix = str.slice(0, i);
    let suffix = str.slice(str.length - i);

    if (prefix === suffix) {
      resultStr = prefix;
    }
  }

  return resultStr.length;
};

//toy 1번
function orderOfPresentation(N, K) {
  const used = [];
  let res = 0;

  //used에 N길이만큼 0을 push
  for (let i = 0; i < N; i++) used.push(0);

  //팩토리얼
  const fac = n => {
    let f = 1;
    for (let i = n; i > 0; i--) f *= i;
    return f;
  };

  for (let j = 0; j < K.length; j++) {
    const n = K[j];
    used[n - 1] = 1;
    const p = used.slice(0, n);
    const len = p.filter(i => i === 0).length;
    res += len * fac(N - j - 1);
  }
  return res;
}

console.log(orderOfPresentation(3, [2, 3, 1]));

//fibonacci
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = n => {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};

// ---
const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) return middle;
    target < arr[middle] ? (right = middle - 1) : (left = middle + 1);
  }
  return -1;
};

//거듭제곱 리턴

function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

// tree 알고리즘

let dfs = function (node) {
  let values = [node.value];

  node.children.forEach(n => {
    values = values.concat(dfs(n));
  });

  return values;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

// Implementation Graph
// undirected graph (무향 그래프)
// adjacency list (인접 리스트)
class GraphWithAdjacencyList {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // 이미 존재하는 정점이라면 덮어씌워지지 않게 방지합니다.
    this.vertices[vertex] = this.vertices[vertex] || [];
  }

  contains(vertex) {
    // 인자로 넘겨받은 정점의 존재여부를 반환합니다.
    return !!this.vertices[vertex];
  }

  addEdge(fromVertex, toVertex) {
    // 넘겨받은 두 정점중 하나라도 존재하지 않는다면
    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      // 아무것도 하지않고 종료합니다
      return;
    }

    // 두 정점이 모두 존재한다면
    // 첫번째 정점의 인접 리스트에 두번째 정점을 추가하고 (간선이 존재하지 않을 경우)
    if (!this.hasEdge(fromVertex, toVertex)) {
      this.vertices[fromVertex].push(toVertex);
    }
    // 두번째 정점의 인접 리스트에 첫번째 정점을 추가합니다 (간선이 존재하지 않을 경우)
    if (!this.hasEdge(toVertex, fromVertex)) {
      this.vertices[toVertex].push(fromVertex);
    }
  }

  hasEdge(fromVertex, toVertex) {
    // 만약 정점(fromVertex)이 존재하지 않는다면
    if (!this.contains(fromVertex)) {
      // false를 반환합니다
      return false;
    }
    // 존재한다면 해당 정점의 리스트에 toVertex가 포함되어있는지 반환합니다
    return !!this.vertices[fromVertex].includes(toVertex);
  }

  removeEdge(fromVertex, toVertex) {
    // 넘겨받은 두 정점중 하나라도 존재하지 않는다면
    if (!this.contains(fromVertex) || !this.contains(toVertex)) {
      // 아무것도 하지않고 종료합니다
      return;
    }

    // 두 정점이 모두 존재한다면
    // 첫번째 정점의 인접 리스트에 두번째 정점이 있을 경우
    if (this.hasEdge(fromVertex, toVertex)) {
      // 두번째 정점의 인덱스를 찾은 뒤 삭제합니다
      const toVertexIndex = this.vertices[fromVertex].indexOf(toVertex);
      this.vertices[fromVertex].splice(toVertexIndex, 1);
    }
    // 두번째 정점의 인접 리스트에 첫번째 정점이 있을 경우
    if (this.hasEdge(toVertex, fromVertex)) {
      // 첫번째 정점의 인덱스를 찾은 뒤 삭제합니다
      const fromVertexIndex = this.vertices[toVertex].indexOf(fromVertex);
      this.vertices[toVertex].splice(fromVertexIndex, 1);
    }
  }

  removeVertex(vertex) {
    // 만약 인자로 넘겨받은 정점이 존재한다면
    if (this.contains(vertex)) {
      // 해당 정점과 연결된 간선을 지우고
      while (this.vertices[vertex].length > 0) {
        this.removeEdge(this.vertices[vertex][0], vertex);
      }
      // 최종적으로 해당 정점을 삭제합니다
      delete this.vertices[vertex];
    }
  }
}

// inequalityNumber
const inequalityNumber = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      // 부등호 수를 만든 경우
      return parseInt(nums.join(''));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      // 숫자를 차례대로 검토한다.
      // max를 구할 때는 9부터, min을 구할 때는 0부터
      const right = digits[i];
      // 이전 단계에서 사용한 숫자인 경우 스킵
      if (isVisited[right]) continue;

      // 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
      if (idx >= 0) {
        // 항상 바로 직전의 숫자와 비교하면 된다.
        const left = nums[nums.length - 1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        // 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다.
        return target;
      }
      // 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
      isVisited[right] = false;
    }

    return undefined;
  };

  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};

//rotatedArraySearch
const rotatedArraySearch = function (rotated, target) {
  let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
