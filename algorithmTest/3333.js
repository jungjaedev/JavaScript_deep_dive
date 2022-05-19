function getkthSmallestTerm(arr, k) {
  let arrayLists = [];
  let n = arr[0];
  let ch = Array.from({ length: n }, () => 0);
  function DFS(v) {
    if (v === n) {
      let tmp = [];
      for (let i = 1; i < n; i++) {
        if (ch[i] === 1) tmp.push(arr[i]);
        console.log(arr[i]);
      }
      if (tmp.length > 0) arrayLists.push(tmp);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return arrayLists[k];
}

console.log(getkthSmallestTerm([3, 2, 2, 1], k));
