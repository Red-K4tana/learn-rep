function check(a, x) {
  // your code here
  let res = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] === x) {
      res[i] = a[i]
    } 
  }
  if (res.length > 0) {
    return true
  } else {
    return false
  }
  
  
}