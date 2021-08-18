function test2(n, m) {
  let answer = [];
  // m => arr.length
  // n => 1 ~ n까지
  let arr = []; // 1~n까지 담아줌
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let ch = Array.from({ length: n - 1 }, () => 0); // 사용여부 체크
  let tmp = Array.from({ length: m }, () => 0); // answer에 푸쉬값

  function DFS(L) {
    if (L === n) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < m; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

test2(5, 2);
