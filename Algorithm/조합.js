function solution(n, m) {
  let answer = [];
  // answer에 push할 임시 배열선언
  let tmp = Array.from({ length: m }, () => 0);
  //DFS
  function DFS(L, s) {
    //탈출조건
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 1);
  return answer;
}
