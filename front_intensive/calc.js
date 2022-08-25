const Test = () => {
  const [result, setResult] = useState<string[] | number[]>([]);

  // 후위 표기식으로의 변환 함수
  // string 타입으로 인자를 받아 string | number 타입으로 이루어진 배열로 결과를 리턴
  const MakePostfix = (Input: string) => {    
    const operators: string[] = []; // 연산자 스택
    const postfix: (string | number)[] = []; // 후위 표기 결과 저장 배열

    // 기본적으로 숫자를 잠깐 담는 변수
    // 음수나 두 자릿수 이상의 숫자 또한 처리하기 위함.
    let temp = ''; 

    interface Priority { // 우선순위 객체를 위한 인터페이스
      [key: string] : number,  
    }

    const priority: Priority = { // 우선순위 객체, 괄호는 우선순위가 가장 낮다.
      '*' : 3,
      '/' : 3,
      '%' : 3,
      '+' : 2,
      '-' : 2,
      '(' : 1,
      ')' : 1
    }
    
    if(!checkBracketNum(Input)){ // 만약 괄호가 짝이 맞지 않는다면 에러를 뱉음.
      return console.log("에러임");
    }

    for(let i = 0; i < Input.length; i++){
      // 음수를 처리하기 위한 조건, 연산자 바로 다음에 -가 나오거나, 맨 처음에 -가 나온 경우 처리
      if(Input[i] === '-' && temp === ''){
        temp += Input[i];
        continue;
      }

      // 0~9 사이의 수 또는 소숫점 일때
      if(Input[i] >= '0' && Input[i] <= '9' || Input[i] === '.') {
        temp += Input[i];
        if(i === Input.length - 1) { // 맨 뒷번째 숫자는 그 후 연산자가 없기에 여기서 따로 처리해줌. 
          postfix.push(Number(temp));
        }
      }      

      else {
        if(temp !== ''){ // Input[i]가 연산자 일때 temp에 숫자가 담겨있었다면, 그 숫자를 postfix 배열에 넣어줌.
          postfix.push(Number(temp));
          temp = ''; // 넣은 후 다음 숫자를 위해 temp를 비워줌.
        }  
        
        if(Input[i] === ' '){ // 공백인 경우에는 무시함.
          continue;
        } 

        if(Input[i] === '('){ // 좌 괄호의 경우 무조건적으로 연산자 스택에 넣어줌
          operators.push(Input[i]);
        }
        
        else if(Input[i] === ')'){ // 우 괄호의 경우 좌 괄호, 즉 괄호가 닫히기 전까지의 모든 연산자를 pop -> postfix 배열에 넣어줌
          let tempOperator: any = '';
          while(operators.length !== 0){
            tempOperator = operators.pop();
            if(tempOperator === '('){
              break;
            }
            postfix.push(tempOperator);
          }
        }        
        
        else {  // + , -, *, /, % 일때
          // 연산자 스택이 비어있지 않고, 스택 최상위 요소의 우선순위가 같거나 더 높을 때, 모든 연산자를 pop -> postfix 배열에 넣어줌
          while((operators.length !== 0) && (priority[operators[operators.length-1]] >= priority[Input[i]])){ 
            let tempOperator: any = operators.pop();
            postfix.push(tempOperator);
          }
          operators.push(Input[i]); // 그 후에 Input[i](연산자)를 연산자 스택에 넣어줌.
        }
      }      
    }

    while (operators.length !== 0){ // 연산자 스택에 연산자가 아직 남아있는 경우
      postfix.push(operators.pop() as string); // 마저 넣어줌
    }
    
    return postfix; // 후위 표기식으로 변환된 배열을 리턴
  } 

  const calcPostFix = (arr: any) => { // 후위 표기식으로 변환된 배열을 계산하는 함수
    interface Calc {
      [key: string] : Function;
    }

    const operatorFunctions: Calc = { // ex) Functions['*'](1,2) = 1 * 2 = 2
      '*' : (left: number, right: number) => { return left * right },
      '/' : (left: number, right: number) => { return left / right },
      '%' : (left: number, right: number) => { return left % right },
      '+' : (left: number, right: number) => { return left + right },
      '-' : (left: number, right: number) => { return left - right }
    }

    const stack = []; // 계산을 위한 스택

    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'number'){ // 숫자인 경우에만 스택에 넣는다.
        stack.push(arr[i]);
      }
      else{ // 연산자를 만나면 두개씩 스택에서 뽑아서 연산을 한 후에 그 결과를 다시 스택에 넣는다.
        const operator = arr[i];

        const operand1 = stack.pop();
        const operand2 = stack.pop();

        const result: number = operatorFunctions[operator](operand2,operand1);
        stack.push(result);
      }
    }

    let result: any = stack.pop(); // 최종 결과는 스택에 딱 하나 남아있으므로 pop해줌.
    
    return result.toString().length >= 13 ? result.toExponential(9) : result; // 13자리 이상이라면 지수표기법으로 바꿔서 리턴
  }
  
  const checkBracketNum = (input: string) => { // 괄호의 짝이 맞는지 판별하는 함수
    let left = 0;
    let right = 0;

    for(let i = 0; i < input.length; i++){
      if(input[i] === '('){
        left++;
      }
      else if(input[i] === ')'){
        right++;
      }
    }

    return left === right;
  }

  useEffect(() => {
    setResult(calcPostFix(MakePostfix("11.111/3.4")));
  },[])
  
  return(<>
    <div>hello</div>
    <div>{result}</div>
  </>)    
};