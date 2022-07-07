// 후위식 (postfix) 연산
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(parseInt(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let a = '352+*9-';
console.log(solution(a));
