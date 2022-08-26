// 후위 표기식으로의 변환 함수

import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

// string 타입으로 인자를 받아 string | number 타입으로 이루어진 배열로 결과를 리턴
export const makePostFix = (Input: string) => {
  const operators: string[] = []; // 연산자 스택
  const postfix: (string | number)[] = []; // 후위 표기 결과 저장 배열

  // 기본적으로 숫자를 잠깐 담는 변수
  // 음수나 두 자릿수 이상의 숫자 또한 처리하기 위함.
  let temp = "";

  interface Priority {
    // 우선순위 객체를 위한 인터페이스
    [key: string]: number;
  }
 
  const priority: Priority = {
    // 우선순위 객체, 괄호는 우선순위가 가장 낮다.
    "*": 3,
    "÷": 3,
    "%": 3,
    "+": 2,
    "-": 2,
    "(": 1,
    ")": 1,
  };
  
  let copy = Input[0]; // 밑 for문의 조건식에서 i가 0일 경우 Input[i-1]은 마지막 인덱스가 되므로 처리가 애매하기 때문에 미리 넣어줌.

  // 아래 for문은 좌괄호 앞에 숫자일 경우 ,우괄호 뒤에 숫자일 경우 곱하기를 붙여준다.
  for(let i = 1; i < Input.length; i++){
    if(Input[i] === "(" && (Input[i-1] >= "0" && Input[i-1] <= "9") ){
     copy += "*(";
    }
    else if(Input[i] === ")" && (Input[i+1] >= "0" && Input[i+1] <= "9") && i !== Input.length-1){
     copy += ")*";
    }
    else {
     copy += Input[i];
    }    
  }  

  for (let i = 0; i < copy.length; i++) {
    // 음수를 처리하기 위한 조건, 연산자 바로 다음에 -가 나오거나, 맨 처음에 -가 나온 경우 처리
    if (copy[i] === "-" && temp === "") {
      temp += copy[i];
      continue;
    }
  
    // 0~9 사이의 수 또는 소숫점 일때
    if ((copy[i] >= "0" && copy[i] <= "9") || copy[i] === ".") {
      temp += copy[i];
      if (i === copy.length - 1) {
        // 맨 뒷번째 숫자는 그 후 연산자가 없기에 여기서 따로 처리해줌.
        postfix.push(Number(temp));
      }
    } else {
      if (temp !== "") {
        // copy[i]가 연산자 일때 temp에 숫자가 담겨있었다면, 그 숫자를 postfix 배열에 넣어줌.
        postfix.push(Number(temp));
        temp = ""; // 넣은 후 다음 숫자를 위해 temp를 비워줌.
      }
  
      if (copy[i] === " ") {
        // 공백인 경우에는 무시함.
        continue;
      }
  
      if (copy[i] === "(") {
        // 좌 괄호의 경우 무조건적으로 연산자 스택에 넣어줌
        operators.push(copy[i]);
      } else if (copy[i] === ")") {
        // 우 괄호의 경우 좌 괄호, 즉 괄호가 닫히기 전까지의 모든 연산자를 pop -> postfix 배열에 넣어줌
        let tempOperator: any = "";
        while (operators.length !== 0) {
          tempOperator = operators.pop();
          if (tempOperator === "(") {
            break;
          }
          postfix.push(tempOperator);
        }
      } else {
        // + , -, *, /, % 일때
        // 연산자 스택이 비어있지 않고, 스택 최상위 요소의 우선순위가 같거나 더 높을 때, 모든 연산자를 pop -> postfix 배열에 넣어줌
        while (
          operators.length !== 0 &&
          priority[operators[operators.length - 1]] >= priority[copy[i]]
        ) {
          let tempOperator: any = operators.pop();
          postfix.push(tempOperator);
        }
        operators.push(copy[i]); // 그 후에 copy[i](연산자)를 연산자 스택에 넣어줌.
      }
    }
  }

  while (operators.length !== 0) {
    // 연산자 스택에 연산자가 아직 남아있는 경우
    postfix.push(operators.pop() as string); // 마저 넣어줌
  }  
  return postfix; // 후위 표기식으로 변환된 배열을 리턴
};