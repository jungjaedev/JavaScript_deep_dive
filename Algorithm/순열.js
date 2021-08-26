/**
개업 이래로 항상 승승장구하는 '승승장구 치킨집'의 비결은 소스에 있다. 수많은 타사 브랜드 치킨집들이 승승장구 치킨집의 소스 비결을 알아내려고 했으나 빈번히 포기했다.
그 이유는 5대째 내려오는 '비밀의 승승장구 치킨 소스 비율 레시피'는 70억 인구 중 사장님만 알고 있기 때문이다. 최근, 누리꾼 사이에서 이 레시피의 일부분을 발췌했다는 소문을 듣게 되었다.
그 소문은 다음과 같다.

N 가지의 재료 중에 단 M 가지만을 사용하여 조합한 모든 경우의 수 중 하나이다.
재료는 0과 1로만 이루어진 숫자로 암호화가 되어 있고, 항상 1로 시작하며 복호화를 할 수 없다.
단, 0이 3개 이상인 재료는 상한 재료이기 때문에 제외한다.
재료의 순서에 따라 맛이 달라지기 때문에, 재료를 넣는 순서가 다르다면 다른 레시피이다.
이 소문을 참고하여 '비밀의 승승장구 치킨 소스'가 될 수 있는 경우의 수를 모두 반환하는 함수를 작성하세요.

const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);
/*
  [
    [1, 10], [1, 1100], [1, 1111],
    [10, 1], [10, 1100], [10, 1111],
    [1100, 1], [1100, 10], [1100, 1111],
    [1111, 1], [1111, 10], [1111, 1100]
  ];
*/
 */


function newChickenRecipe(stuffArr, choiceNum) {
  // 새로운 배열
  let newArr = [];
  // stuffArr 반복문 => 0이 3개나오는 것 제외 -> 새로운 배열에 담아줌
  for (let i = 0; i < stuffArr.length; i++) {
    let filter = String(stuffArr[i]).split('');
    let istriple = 0;
    for (let j = 0; j < filter.length; j++) {
      if (filter[j] === '0' && filter[j + 1] === '0' && filter[j + 2] === '0') istriple = 1;
    }
    if (istriple === 0) newArr.push(stuffArr[i]);
  }
  // 오름차순
  newArr.sort((a, b) => a - b);
  // 예외처리
  if (choiceNum > newArr.length) return [];

  // 순열
  let result = [];
  let ch = Array.from({ length: newArr.length }, () => 0); // 사용한것인지 중복체크할 배열 [1 , 0 , 1]
  let tmp = Array.from({ length: choiceNum }, () => 0); // result에 push할 배열    [1, 1111]
  function DFS(L) {
    if (L === choiceNum) {
      // 탈출조건
      result.push(tmp.slice());
    } else {
      for (let i = 0; i < newArr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = newArr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return result;
}
