function calculate(start, end) {
  let result = 0;

  if (start > end) {
    for (var i = start - 1; i > end; i--) {
      result += i;
      console.log(i);
    }
  } else {
    for (var i = start + 1; i < end; i++) {
      result += i;
      console.log(i);
    }
  }
  return result;
}

console.log("Hasil", calculate(1, 4));
