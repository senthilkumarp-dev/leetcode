function printSubSeq(idx, ds, arr, n) {
  if (idx >= n) {
    console.log(ds);
    return;
  }

  printSubSeq(idx + 1, ds, arr, n);
  ds.push(arr[idx]);
  printSubSeq(idx + 1, ds, arr, n);
  ds.pop();

  // Another way
  // ds.push(arr[idx]);
  // printSubSeq(idx + 1, ds, arr, n);
  // ds.pop();
  // printSubSeq(idx + 1, ds, arr, n);
}
let arr = [3, 1, 2];
let n = 3;
printSubSeq(0, [], arr, n);

// tc = (2^n)*n
// sc = n
