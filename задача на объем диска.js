function save(sizes, hd) {
  // your code here
  let sum = 0;
  let round = 0;
  function sumArray (a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return sum;
  }
  if (sizes.length === 1 && sizes[0] <= hd) {
    return 1;
  };
  if (sumArray(sizes) < hd) {
    return sizes.length;
  };
  for (let i = 0; i < sizes.length; i++) {
    sum += sizes[i];
    round++;
    if (sum > hd) {
      return round - 1;
      break;
    } else if (sum === hd && sizes.length === round) {
      return round;
      break;
    };
  };
};