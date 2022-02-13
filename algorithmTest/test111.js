function mathtest(num) {
  function fibonacci(n) {
    if (n === 0) {
      return [0];
    }
    let result = [0, 1];
    for (let i = 2; i <= n; i++) {
      if (num === result[result.length - 1]) {
        return 'yes';
      } else if (num < result[result.length - 1]) {
        return 'no';
      }
      result[i] = result[i - 2] + result[i - 1];
    }
    return result;
  }
  return fibonacci(num);
}
console.log(mathtest(34));
console.log(mathtest(54));
