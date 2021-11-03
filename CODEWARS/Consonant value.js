function solve(s) {
  return Math.max(...s.replace(/[aeiou]+/g, ' ').trim().split(' ').map(addUpSubstring));
};

function charToValue(c) {
  return c.charCodeAt(0) - 96;
}

function addUpSubstring (str) {
  return str.split('').map(charToValue).reduce((acc, item) => acc += item, 0);
}