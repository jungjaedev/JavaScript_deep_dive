function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      let swap = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = swap;
    }
    console.log(`${i}: ${arr}`);
  }
  return arr;
}

console.log(selectionSort([7, 5, 9, 1, 3]));
