// OLD CODE 
var result;
function getText(){
   var someText = prompt("In which city do you leave?");
   capWords(someText);
   alert(result.join(" "));
}

function capWords(input){
   var inputArray = input.split(" ");
   var transformed = "";
   result=[];
   for(var i =0; i<inputArray.length; i++){
      transformed = [
         inputArray[i].charAt(0).toUpperCase(),
         inputArray[i].substring(1)
      ].join("");
      result.push(transformed);
   }
}
