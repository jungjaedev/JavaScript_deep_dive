// 괄호 문자 제거

function solution(s) {
  let answer = '';
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else {
      stack.push(x);
    }
  }
  answer = stack.join('');
  return answer;
}

let a = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(a));
