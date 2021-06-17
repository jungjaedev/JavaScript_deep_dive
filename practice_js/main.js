// const animals = [
//   { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
//   { name: 'monkey', size: 'medium', isAggressive: true, weight: 20 },
//   { name: 'cat', size: 'small', isAggressive: false, weight: 10 },
//   { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
// ];
// animals.reverse
// // animals.forEach(function (animal, index) {
// //   console.log(`${index} ${animal.size}`);
// // });

// // //map을 사용하면 새로운 배열 재생산
// // const animalsNames = animals.map(function (animal) {
// //   return `${animal.name} is ${animal.size}`;
// // });

// // console.log(animalsNames);

// // // filter
// // const smallAnimals = animals.filter(function (item) {
// //   return item.size === 'small';
// // });

// // console.log(smallAnimals);

// // reduce
// const totalweight = animals.reduce(function (acc, cur) {
//   return acc + cur.weight;
// }, 0); //0은 초기값
// console.log(totalweight);

// // const numbers = [1, 10, 15, 23, 123];

// // const total = numbers.reduce(function (sum, number) {
// //   console.log(sum, number);
// //   return sum + number;
// // });

// // console.log(total);

function or(arr) {
  return arr.length === 0 ? false : arr[0] || or(arr.slice(1));
}

function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
}

function fibonacci(num) {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

function findMatryoshka(matryoshka, size) {
  if (matryoshka.size === size) return true;
  else if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }
  return false;
}

function browserStack(actions, start) {
  let prev = [];
  let next = [];
  let now = start;

  for (let i = 0; i < actions.length; i++){
    if(actions[i] === -1 && prev.length > 0){
      let nowpage = prev.pop(); 
      next.push(now)
      now = nowpage
    } else if(actions[i] === 1 && next.length > 0) {
      let nowpage2 = next.pop();
      prev.push(now);
      now = nowpage2
    } else {              
      prev.push(now); [ba]d[c]
      now = actions[i];
      next = [];
    }
  }
  return [prev, now, next]
}

function improveBook(books, speeds) {
  let days = [];
  let count = 1;
  let answer = [];
  // 100될때까지. 날짜 구하는 반복문
  for (let i = 0; i < books.length; i++){
    while(books[i] + speeds[i] * count < 100) {
      count++;
    }
    days.push(count);
    count = 1
  } // [ ]

  while (days.length > 0) {
    f_index = days.findIndex(i => i > days[0])
    if(f_index === -1) {
      answer.push(days.length);
      days.splice(0, days.length);
    } else {
      answer.push(f_index);
      days.splice(0, f_index);
    }
  }
  return answer;
}

function queuePrinter(bufferSize, capacities, documents) {
  let work = [];
  let sec = 0;

  for (let i=0; i < bufferSize; i++){
    work.push(0);
  }
  let sum = 0;

  while(documents.length > 0){
    work.pop();
    sum = 0;
    for(let j=0; j < work.length; j++){
      sum += work[j];
    }
    
    let temp = documents.shift();
    if(temp + sum <= capacities){
      work.unshift(temp);
    }else{
      work.unshift(0);
      documents.unshift(temp)
    }
    sec++; 
  }

   while(work.length){
      work.pop();
      sec++
    }
  return sec;
}