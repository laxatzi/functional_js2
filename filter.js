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
