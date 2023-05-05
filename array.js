function productArray(arr, n) {
  let prod = 1;
  for (let i = 0; i < n; i++) prod *= arr[i];
  let result = [];
  for (let i = 0; i < n; i++) result.push(prod / arr[i]);
  return result;
}

let arr = [3, 27, 4, 2];
let n = arr.length;

console.log("Tuing Hasil ==>", productArray(arr, n));
