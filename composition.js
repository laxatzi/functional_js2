//Composition
/* 
  Composition helps build up new functionality using small pieces of existing functionality.
  In order to do that you have to nest your functions.
  We already know that javascript allows you to use functions to call a function.
  Also high order function take a function as an argument or are able to return a function.
  Function methods can also be changed, the way that we demonstrated in the last lesson about map, reduce, filter.
  You can take a series of pure functions that return a value and each one of them can perform its function independently  and pass its return value on the next one, so that the sequence of functions can be all called in a single line.
*/
// example
(function(){
  'use strict';
  
   const threeLetterAnimalWords = word=> word.length === 3;
   const capitalize = word=> word.charAt(0).toUpperCase() + word.slice(1);
   const concatWords = (wordOne, wordTwo)=> wordOne + wordTwo;

   const animals = ['dog', 'cat', 'tiger'];

   const threeLetterAnimalWordsConcatenated = animals.filter(threeLetterAnimalWords)
                                                   .map(capitalize)
                                                   .reduce(concatWords);

   console.log(threeLetterAnimalWordsConcatenated);//DogCat

}());//end wrapper iife

// Another thing that javascript allow us to do is to pass functions to other functions using nested parentheses. 
// When a function followed by parenthesis is being passed to another function, it is not passed as the function, but rather as the returned value of the function. example:

(function(){
  'use strict';

  const addOne = x=> x+1;
  const timesTwo = x=> x * 2;
  console.log(addOne(timesTwo(3))); // 7
  console.log(timesTwo(addOne(3))); // 8  *So when it comes to nesting functions, as I said, the most important thing to keep in mind is that the order matters. The operation in the innermost parentheses is always going to be performed first

}());//end wrapper iife

//Nesting has no limits in JavaScript
/* 
  We can keep nesting just as far as we want, as long as we follow a few simple rules.
  Each nested function must be a pure function.
  We want to make sure that they pass their return values.
  We respect the order in which these operations are being performed.

  Provided that we follow the above rules, we can nest to our hearts content.
*/
// example

(function(){
  'use strict';
  const addOne = x=> x+1;
  const timesTwo = x=> x * 2;
  console.log(addOne(timesTwo(3))); // 7
  console.log(timesTwo(addOne(3)));
  console.log(timesTwo(addOne(addOne(timesTwo(3)))));  // 16
  console.log(addOne(timesTwo(timesTwo(addOne(3)))));  // 17

}());//end wrapper iife


// Manual Composition
// Using composition to make nesting cleaner

(function(){
  'use strict';

    const addOne = x=> x+1;
    const timesTwo = x=> x*2;
    const addOneTimesTwo = x=> timesTwo(addOne(x));
    console.log(addOneTimesTwo(3)); // 8
    //Or
    const timesTwoAddOne = x=> addOne(timesTwo(x)); 
    console.log(timesTwoAddOne(3)); // 7
}());//end wrapper iife

/* 
  With manual composition we can create as many variations as we like. BUT, we are trading complexity for configuration. 
  What we really want is a compose function, which is not currently native to javascript and can take two functions and then nest them producing a new one.
  That new function would be the result of applying the compose function, and then passing in the first function and the second function.
  And a compose function, and then passing in the first function and the second function. And then the tricky part is the order in which the operations would be performed. 
  Because of course, as we know it, the order is very critical when nesting functions.

*/

// Create compose function

(function(){
  'use strict'

  const compose = (f1,f2)=> {
     return val=>{
        return f1(f2(val));
     }
  }
  
;}());//end wrapper iife

/* 
  Analyzing code, we see that ... the second function (f2) we passed in our compose function is going to be our inner function, the one that is going to be called first. 
  The last function you pass in is the one that is more likely to change, so it should be the first one that operates on the value.
  The result of that will be passed to the outer function, which is the first one that we pass in.
   example:
*/

(function(){
  'use strict';

    const addOne = x=> x + 1;
    const timesTwo = x=> x * 2;
    const compose = (f1, f2)=> {
       return val=> {
          return  f1(f2(val));
       }
    }

    const addOneTimesTwo = compose(timesTwo, addOne);
    console.log(addOneTimesTwo(3)); // 8
    console.log(addOneTimesTwo(4)); // 10
  // or
   const timesTwoAddOne = compose(addOne, timesTwo);
   console.log(timesTwoAddOne(3)); // 7
   console.log(timesTwoAddOne(4)); // 9
}());//end wrapper iife

/* 
  The point here is that we trying to keep the examples simple to a very basic application for which is not really necessary to use such a composition, just so that the concept of composition is more understandable.
  We are going to use this concept for much more complex things.
  We are passing in functions and composing them in a  consistent order.
  Keep track of the return types that you are working with as well because every inner function is returning a value that is going to be operated on by the outer functions.
  Those outer functions need to be expecting the return value that comes from the inner functions.
  DO NOT try to use compose with impure functions coz you want to make sure that your functions always return the same value regardless of the state outside of them, and that they don't make changes to the state outside of themselves. 

*/

// Use of libraries for function composition
/* 
  To be honest, there are some problems with the simple compose that we have created.
  First, it doesn't handle nested functions that take multiple (more than two) arguments.
  We need to be able to support more args coz variadic functions are an important aspect of composing.
  Example:
*/

(function(){
  'use strict';

  const compose = (f1,f2)=> {
     return val=>{
        return f1(f2(val));
     }
  }

  const addOne = x=> x+1;
  const divide = (x,y)=> x/y;
  const divideAndAdd = compose(addOne, divide);

  console.log(divideAndAdd(4,2)); // NaN 

}());//end wrapper iife

// comment the code
/* 
  javascript is returning not an number because it is not ready to deal with this.
  Our compose was designed to accept a single value.
  If we were trying to pass in multiple values, we'd had to do something more complex to the way that it is structured and then we'd only be able to accept two values.
  There are other problems too. for example our simple compose doesn't handle more than two functions.

  example:
*/

(function(){
  'use strict';
  const compose = (f1,f2)=> {
   return val=>{
      return f1(f2(val));
   }
}

const addOne = x=> x+1;
  const addOneThreeTimes =  compose(addOne, addOne, addOne);
  console.log(addOneThreeTimes(4)); // 6 --here we've got 6 instead of 7 because javascript IGNORES extra arguments when creating a function. It just ignores them end doesn't returns an error.

}());//end wrapper iife

// This is the reason you should adopt a functional programming library like underscore or Ramda that includes a robust compose method that you are comfortable working with.
// Using a library is often as simple as just including it in your code, and then referencing it appropriately. Once you understand how functional programming works, choosing a library is the best way to go.