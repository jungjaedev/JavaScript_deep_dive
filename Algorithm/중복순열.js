/** 문제
가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임입니다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.
 */
/* 입출력 예시
    let output = rockPaperScissors(3);
    console.log(output);
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
  */

function rockPaperScissors(games) {
  // games 없으면 default => 3
  games = games || 3;
  // rps 배열로 선언
  let rps = ['rock', 'paper', 'scissors'];
  // 결과 담아줄 빈배열
  let answer = [];
  // 2차원배열 임시 저장할 배열
  let tmp = Array.from({ length: games }, () => 0);
  // DFS
  function DFS(L) {
    if (L === games) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < rps.length; i++) {
        tmp[L] = rps[i];
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
