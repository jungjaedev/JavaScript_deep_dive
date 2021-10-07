function newChickenRecipe(stuffArr, choiceNum) {
  // 상한 것 빼고 새로 담아줄 배열
  let newArr = [];
  // stuffArr에서 0이 3개인 것 제외.
  for (let i = 0; i < stuffArr.length; i++) {
    let filter = String(stuffArr[i]).split('');
    let isZero = 0;
    for (let j = 0; j < filter.length; j++) {
      if (filter[j] === '0') isZero++;
    }
    if (isZero < 3) newArr.push(stuffArr[i]);
  }
  // 오름차순 정렬
  newArr.sort((a, b) => a - b);
  // 예외처리
  if (choiceNum > newArr.length) return [];
  // 순열
  let answer = [];
  let tmp = Array.from({ length: choiceNum }, () => 0); //임시 배열
  let ch = Array.from({ length: newArr.length }, () => 0); //중복체크할 배열
  // DFS
  function DFS(L) {
    //탈출조건
    if (L === choiceNum) {
      // choiceNum => 4
      answer.push(tmp.slice());
    } else {
      debugger;
      for (let i = 0; i < newArr.length; i++) {
        //[1, 10, 11, 1111111111]
        if (ch[i] === 0) {
          //               ch =[1,  1, 1 ,    0]
          ch[i] = 1;
          tmp[L] = newArr[i]; // tmp = [1,10,11,1111111111]
          DFS(L + 1); // DFS(1) // DFS(2) // DFS(3)
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}
