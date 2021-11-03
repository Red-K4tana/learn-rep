function arraySum(arr) {
  let b = arr.toString().split(',');
  let sum = 0;
  for(i = 0; i < b.length; i++) {
    sum +=Number.isNaN(Number(b[i])) ? 0 : Number(b[i])
  }
  return sum;
}