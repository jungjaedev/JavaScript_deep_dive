### 문제

1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

### 입력예제

```
3 2
```

### 출력예제

```
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
9
```

### 풀이

#### 트리구조

```js
      		 DFS(0)
               /   ㅣ   \
         DFS(1)  DFS(1)  DFS(1)
        /  ㅣ  \	/  ㅣ  \	/  ㅣ  \
     DFS(2) ... ...
    /  ㅣ  \
 DFS(3) ... ...
```

- L(레벨)은 m까지 계속 증가
- 트리의 가짓수 => n개 만큼

```js
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    // 탈출조건
    if (L === m) {
      // for문으로 작성했다면 m중for문
      //=>tmp를 바로 push하면 같은 주소값을 사용하므로 slice()를 사용해서 push함
      answer.push(tmp.slice());
    } else {
      //1부터 n까지 반복
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
```

### 수도코드

- 리턴할 변수선언
- answer에 push할 임시 배열
- DFS를 통한 풀이(탈출조건 and 반복문에 유의)
