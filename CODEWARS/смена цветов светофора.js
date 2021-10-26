function updateLight(current) {
   //your code here!
   let updateLight;
   if (current === "green") {
     updateLight = "yellow";
     return updateLight;
   } else if (current === "yellow") {
     updateLight = "red";
     return updateLight;
   } else if (current === "red") {
     updateLight = "green";
     return updateLight;
   }
 }