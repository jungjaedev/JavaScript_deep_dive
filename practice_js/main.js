function boardGame(board, operation) {
  // 현재위치 좌표
  let current = board[0][0];
  // UDRL 이동시 사용할 값
  let [Y, X] = [0, 0];
  let answer = 0;
  const isValid = (Y, X) => Y >= 0 && Y < board.length && X >= 0 && X < board[0].length;
  // 반복문 (operation.length만큼)
  for (let move of operation) {
    // 조건문 => U D R L
    if (move === 'U') {
      Y += -1;
      X += 0;
    } else if (move === 'D') {
      Y += 1;
      X += 0;
    } else if (move === 'R') {
      Y += 0;
      X += 1;
    } else if (move === 'L') {
      Y += 0;
      X += -1;
    }
    // 범위 벗어났는지 확인
    if (!isValid(Y, X)) return 'OUT';
    // 벗어나지X면 => 좌표의 값을 더해줌
    current = board[Y][X];
    answer += current;
  }
  return answer;
}

/** */

function boringBlackjack(cards) {
  let isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let cnt = 0;
  let answer = [];
  let tmp = Array.from({ length: 3 }, () => 0);
  function DFS(L, s) {
    if (L === 3) {
      let sum = tmp[0] + tmp[1] + tmp[2];
      if (isPrime(sum)) {
        cnt++;
        answer.push(tmp.slice());
      }
    } else {
      for (let i = s; i < cards.length; i++) {
        tmp[L] = cards[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);
  return cnt;
}
