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

// PURE FUNCTIONS
/* 
  Pure functions characteristics:

  --Don't rely on the state of the code they are called from
  --Don't create side effects that alter variables outside themselves
  --Only one result for any given set of args
   
*/

// Lets check an impure function
/* 
  An impure function can rely on global or externally defined values
*/
// Example:
(function(){
'use strict';
   const external = [1,2,3];

   const impure = (value)=> {
      let result = value + external.length;  // we don't know what this external value is going to be every single time we call the function
      external.push(result); // mind that we CAN push values onto an array or an object in a const variable
      return result;
   }

   console.log(impure(4)); // 7
   console.log(impure(4)); // 8 // and impure function can affect values outside of itself (external length is changed here) AND an impure function may not always return the same result with the same input. This is a disadvantage when testing code.
}());//end wrapper iife

// What to be careful with in pure functions
/* 
  
*/

(function(){
'use strict';
  const external = [1,3,5];
  const pure = (value, arr)=> {
     let result = value + arr.length;
     return result;
  }

  console.log(pure(4, external)); // 7
  console.log(pure(4, external)); // 7 // function is pure since it returns same result
  // make a push 
  external.push(4);
  console.log(pure(4,external)); // 8 // Mutable values can change result, even with a pure function
}());//end wrapper iife


// Advantages of using pure functions
/* 
  --Results are easy to reproduce and test-you always get the same results every time you pass the same values.
  --Can be called in parallel without altering results
  --Allow memoization- a concept in which you can actually store the value that is going to be returned for any given input in a function.
  
*/