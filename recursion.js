/* 
  The definition of Recursion is, repeatedly calling a function from within itself, and then iterating until a completion condition is reached.
  Ideally, you returned to result without affecting anything outside the function.
  The classic factorial is a typical example of using recursions as a solution.
  A factorial operation is multiply an integer with the previous integer. Then you multiply the product with the next previous integer and keep on going backwards until you reach 1. 
  At this point you stop and return the result.

  Example of implementing a factorial using a traditional loop:
*/

(function(){
  'use strict';
    const factor = number=> {
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

/* 
  The most important element of a recursive function is a 'terminal condition'. 
  Without it, the function will keep executing for ever.
  Do factorial using recursion:

*/
(function(){
  'use strict';
    const factorial = (num)=>{
       if(num <= 0){
          return 1;
       }
       return (num * factorial(num - 1));
    }

    console.log(factorial(6)); // 720
}());//end wrapper iife

// Part of the value of using recursive functions is clean code.
/* 
  We are performing a stateless operation. Not changing the value of variables along the way.
  Having no side effects outside of the functions. 
  We are testing for the terminal condition first, allowing as to exit cleanly from our recursive function.
*/

// Proper Tail Calls
/* 
    In the above example we run the code 6 times (factorial(6)), and each time the code was being stacked into memory and maintained there while the first was running. 
    Unfortunately this heavy memory usage can cause some issues. In some cases it is possible to get around this problem by using a technique called Proper Tail Calls.
    With that technique your recursive function can rewrite values to the last frame of the memory stack. 
    You do that by making sure the recursive call itself is in a tail position in the function.
    In our recursive example, we can see that the final return of the function DOES return our factorial recursive, BUT it does it IN THE CONTEXT OF A CALCULATION. It is NOT being returned by itself. So the factorial doesn't implement a proper tail call.

    Let's create an optimized function.
*/

(function(){
  'use strict';
    const factorialPTC = (number)=> factorIt(number, 1);
    const factorIt = (number, accumulator)=> {
       if(number<=0) { return accumulator; }
       return factorIt(number -1, number * accumulator);
       };
 
      console.log(factorialPTC(6)); // 720
}());//end wrapper iife

// What we have done is: refactor our factorial and we have put our call to factorIt in the tail position. So that our recursive function implements a proper tail call and can be optimized if the JavaScript engine supports tail call optimization.

