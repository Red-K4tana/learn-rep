function spinWords(str) {
  //TODO Have fun :)
  let firstArray = str.split(' ');
  console.log(firstArray);
  let finalStr = [];
  let final;
  for (let i = 0; i < firstArray.length; i++) {
    let lonelyStr;
    lonelyStr = firstArray[i].split('');
    if (lonelyStr.length >= 5) {
      lonelyStr.reverse();
    }
    finalStr += lonelyStr.join('');
    finalStr += ' ';
  }
  final = finalStr.slice(finalStr.length - finalStr.length, finalStr.length - 1);

  return final;
}