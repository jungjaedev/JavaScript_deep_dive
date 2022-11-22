# Big-O

## Intro

1부터 n까지 수의 합을 구하는 방법은 여러가지가 있다.

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

위 두 함수는 같은 역할을 한다. 여기서 더 좋은 코드는 어느 것인가? <br />
여기서 '좋은 것'의 의미는? 세가지 정도로 생각해 볼 수 있다. <br />

- 더 빠른지?
- 메모리를 덜 사용하는지?
- 읽기 쉬운지?

일단 먼저 더 빠른지(속도)에 대해 알아보겠다. <br />
속도가 빠른지 알기위해 시간을 측정해 볼 수 있다. <br />
실행하는데 걸리는 시간을 어떻게 평가하는 방법은? -> 간단히 확인할 수 있는 방법은 `performance.now()` 이용하는 것이다. <br />

```javascript
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds.`);
```

위 코드를 실행시켜 console에서 메시지를 확인해 보자.

```shell
//Output1
Time Elapsed : 0.9035 seconds.
Time Elapsed : 0.8940999999642372 seconds.
```

첫 번째 for문을 이용한 함수를 두 번 연속해서 테스트 해보았다. <br />
서로 다른 결과값을 받음 <br />
이유는?

- 기기에 무엇이 실행되고 있는지에 따라서 다르고(같은 기기에서 다른 결과값을 받음)
- 기기 사양에 따라 다를 수 있음

만약 코드실행 시간이 한시간이 넘게 걸린다면 이를 기다려야할 수도 있음

-> 그러므로 위와같이 실행 시간을 비교하는 것은 좋은 방법이 아님

그럼 시간을 측정하지 않고 어느 코드가 더 좋은지 평가할 수 있는가?
직접 실행하지 않고 특정한 값을 통해 표기하기위해 나오게 된 것이 -> `Big-O`

---
