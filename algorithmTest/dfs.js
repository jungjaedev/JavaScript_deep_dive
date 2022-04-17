function maxLength(a, k) {
  function getAllarray(arr) {
    let check = new Array(arr.length).fill(0);
    let allArray = [];
    let maxLength = 0;
    const dfs = depth => {
      if (depth === check.length) {
        newArr = arr.filter((v, idx) => check[idx]);
        let sum = newArr.reduce((pre, cur) => pre + cur, 0);
        if (sum <= k && newArr.length >= maxLength) {
          allArray.push(newArr);
          maxLength = newArr.length;
        }
      } else {
        check[depth] = 1;
        dfs(depth + 1);
        check[depth] = 0;
        dfs(depth + 1);
      }
    };
    dfs(0);
    return maxLength;
  }
  return getAllarray(a);
}

let a = [74, 659, 931, 1, 2];

console.log(maxLength(a, 61));
