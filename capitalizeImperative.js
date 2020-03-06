// OLD CODE --IMPERATIVE JS

var result;  // variable declared on global scope
function getText(){
   var someText = prompt("In which city do you leave?");
   capWords(someText);  // interdependent functions
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


// What is wrong with this piece of code?
/* 
  --Variables defined in the global scope, outside function
  --Interdependent functions for capWords() and getText()
  --Values being passed around and redefined
  --Native Javascript and Dom methods mixed together
  --Unclear what is happening outside the script
  --Function names being repeated in other scripts
  --Brittle code that won't work outside specific context
*/

