function findMissingLetter(arr) {
  
   for(i=0 ;i < arr.length; i++) {
     let curr = arr[i].charCodeAt(0);
     let next = arr[i + 1].charCodeAt(0);
     
     if(curr + 1 !== next) {
       return String.fromCharCode(curr+1);
     }
   }
   
   
   
 }