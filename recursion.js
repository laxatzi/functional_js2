/* 
  The definition of Recursion is, repeatedly calling a function from within itself, and then iterating until a completion rate is reached.
  Ideally, you returned to result without affecting anything outside the function.
  The classic factorial is a typical example of using recursions as a solution.
  A factorial operation is multiply an integer with the previous integer. Then you multiply the product with the next previous integer and keep on going backwards until you reach 1. 
  At this point you stop and return the result.

  Example of implementing a factorial using a traditional loop:
*/

(function(){
  'use strict';
    const factor = (number)=> {
       let result = 1;
       for(let j = number; j>1; j--){
          result *= j;
       }
       return result;
    }

    console.log(factor(6)); // 720
}());//end wrapper iife


// BUT...we have created some problems to ourselves along the way that make the code a little bit messy
// A lot of local state. State is being created and then destroyed along the way, since result keep on changing values before with returned it.
// Code is not very clean

// Some factorial using the while loop

(function(){
  'use strict';
    const factor = (number)=> {
      let result = 1;
      let j = number; // j defined outside the loop --cleaner  
       while(j>1){
            result *= j;
            j--;
       }
       return result;
    }

    console.log(factor(6)); // 720
}());//end wrapper iife

// above code has the same number of local variables but it is at the same time cleaner.