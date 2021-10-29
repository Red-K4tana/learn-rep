function spinWords(str) {
  //TODO Have fun :)
  return str.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ');

}