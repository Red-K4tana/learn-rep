
//другой вариант решения
function save(sizes, hd) {
  // your code here
  let round = -1;
  while (hd >= 0) {
    hd -= sizes.shift();
    round++;
  }
  return round;
}
