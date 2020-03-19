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