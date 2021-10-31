function countSmileys(arr) {
  let newArr = [];
  let ind;
  
  newArr = arr.filter (function (w) {
    
    if (w === ':)' || w === ':D' || w === ':-)' || w === ':-D' || 
        w === ':~)' || w === ':~D' || w === ';)' || w === ';D' || 
        w === ';-)' || w === ';-D' || w === ';~)' || w === ';~D') {
      
        return 1;
    }
    
  });
  
  return newArr.length;
  
}