// Filter Method
  /* 
    Filtering limits the contents of an array.
    It evaluates each element in the array based on the test condition, that returns true or false, and it returns a new array with only the elements that pass the test, leaving the original array completely unchanged, just like functional methods should.
    It does not alter the state outside of the array that is being returned.
    And it doesn't rely on the state of an application or anything outside of itself in order to perform its operation properly. 
  */

// old practice of filtering arrays with a for loop

(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  const threeLetterAnimals = [];
  for(let j = 0; j < animals.length; j++){
     if(animals[j].length === 3){
        threeLetterAnimals.push(animals[j]);
     }
  }

  console.log(threeLetterAnimals); //['cat', 'dog'];

}());//end wrapper iife


// Refactor code replacing loop with filter method 

(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  let threeLetterAnimals = animals.filter((animal)=> animal.length === 3);

  console.log(threeLetterAnimals); // ['cat', 'dog'];

}());//end wrapper iife

// comment on the above piece of code
/* 
  The filter method went through the array, applied the boolean analysis to each of the elements, and if the result was true, it added that element to the array that it was going to return. 
  As a result, we got back an array that was filtered containing a subset of the elements that matched true for that boolean condition.
*/

// lets make the code more clean by adding abstraction

(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  const checkLetters = (elem)=> elem.length === 3;
  let threeLetterAnimals = animals.filter(checkLetters);

  console.log(threeLetterAnimals); // ['cat', 'dog'];

}());//end wrapper iife

// We want to pass pure functions into our filter method. 
/* 
  Pure functions take a single value of the type that is in the array that we want to filter.
  And they apply a test on this value without any side effects and without relying on the state of the application.
  They would ALWAYS produce the same result for the same input value, and the functions that we want to pass into the filter method return always a boolean value. 
  This should not alter any values outside of their scope, and of course, as with pure functions, they shouldn't alter any variables outside their scope.

  Also, since they are pure they could potentially be used in other contexts without any modification.
*/