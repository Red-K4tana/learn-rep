function spongeMeme(s) {
  let res = '';
  for (i=0; i < s.length; i++) {
    res += (i % 2) ? s[i].toLowerCase() : s[i].toUpperCase();
    }
  return res;
  }