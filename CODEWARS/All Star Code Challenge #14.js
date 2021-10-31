function median(arr) {
//code here
  arr.sort((a,b) => a - b);
  
  let ev = arr.length % 2;
  
  if (arr.length === 3) {
    return arr[1];
  }
  
  if (ev === 1) {
    return arr[Math.floor( arr.length / 2 )];
  } else if (ev === 0) {
    return (arr[(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
  } 
}