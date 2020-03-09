// Capitalize with Functional Programming
/* 
  FUNCTIONAL PROGRAMMING STYLE CHARACTERISTICS 

    --Take advantage of functions as first-class objects
    --Don't change external values or state while executing functions
    --Describe the problem or solution

*/

(function(){
   'use strict';
  
   function capify(str){
      return [str.charAt(0).toUpperCase(), str.substring(1)].join("");
   }

   function capifyMoreWords(fn, str){
      return str.split(" ").map(fn).join(" ");
   }

   function getValue(e){
      var feedback = prompt("Give me feedback! Which style of programming do you prefer?");
      alert(capifyMoreWords(capify, feedback));
   }

 // document.getElementById("button").addEventListener("click", getValue);
}());//end wrapper iife

// advantages of functional coding
/* 
  --Code is more concise
  --Functions defined here are independent and reusable
  --Not reliance on an abstract object being passed around
  --Much easier to unit test
  --Avoid loops with map method
*/

(function(){
'use strict';
  const capify = str => [str.charAt(0).toUpperCase(), str.substring(1)].join("");
  const capifyMoreWords = (fn, str)=> str.split(" ").map(fn).join(" ");
  const getValue = ()=> {
     let feedback = prompt("Give me feedback! Which style of programming do you prefer?");
     alert(capifyMoreWords(capify, feedback));
  }
  document.getElementById("main_button").addEventListener("click", getValue);
}());//end wrapper iife

// examining the refactored code
/* 
  --Code is extremely concise
  --No mutable variables
  --Implied return values
  --Immediately invoked blocks syntax
  --Still 'use strict' (unless its a module)

  
*/