function validParentheses(s){
  let stack = [];
  let open = ['(', '{', '['];
  let close = [')', '}', ']'];
  
  for (i=0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i])
    } else {
      if ( close.indexOf (s[i]) === open.indexOf (stack[stack.length - 1]) ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}