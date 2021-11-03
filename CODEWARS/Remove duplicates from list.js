function distinct(a) {
  let items = {};
  let res = [];
  
  for (i = 0; i < a.length; i++) {
    if (!items[a[i]]) {
      res.push(a[i]);
      items[a[i]] = true;
    }
  }
  return res;
}