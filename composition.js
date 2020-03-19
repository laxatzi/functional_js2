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

   let threeLetterAnimalWordsConcatenated = animals.filter(threeLetterAnimalWords)
                                                   .map(capitalize)
                                                   .reduce(concatWords);

   console.log(threeLetterAnimalWordsConcatenated);//DogCat

}());//end wrapper iife


