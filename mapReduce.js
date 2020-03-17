// Let's remember how a traditional loop is created
(function(){
  'use strict';
  const animals = ['cat', 'dog', 'horse'];
  let lengths = [];
  for(let j = 0; j<animals.length; j++){
     lengths.push(animals[j].length);
  }
  
  console.log(lengths); // [3, 3, 5]


}());//end wrapper iife


// the above code is easy to understand
/* 
  We created an empty array in order to push the new values in that array inside the for loop
  
  So what is wrong with this approach, since it certainly gets the job done?
  The problem is that extra variables need to be declared and managed. 
  For example we had to create our j variable and that variable had to increment every time that we went through the loop.

  We also make changes outside of the loop by modifying the lengths array every time we run through the loop. 
  So the behaviour inside the for loop is NOT contained inside that for loop.

  It is not as clean as the syntax could be.

  We can clean up our code to make things less messy and more state free.
  
*/

//Introduce the map method
  // Mapping lets you create a new array by modifying the values in an existing array. It returns another array that has exactly the same number of elements but they have all (the elements) been modified according to a function that you pass in.
// It leaves the original array unmuted.
//Solving the previous problem with map

(function(){
  'use strict';
  
  const animals = ['cat', 'dog', 'horse'];
  let animalLetterCount = animals.map((animal)=>animal.length);

  console.log(animalLetterCount); //[3, 3, 5]

}());//end wrapper iife

// the above map example can be written with even cleaner code bellow 

(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  const getLength = (item)=> item.length; 
  let animalLetterCount = animals.map(getLength);

  console.log(animalLetterCount); // [3, 3, 5]
  
}());//end wrapper iife
// the getLength function is a pure function that can be used elsewhere thus easy to test.

// REDUCE METHOD
/* 
  Reducing an array to produce a summary value, operates on each item of the array, and maintains a running total while you are going. You can optionally set an initial value for that running total.
  When it is completed, reduce returns a new value derived from the entire set of operations, leaving the original array completely unchanged.
  And of course, like all functional methods, you don't want to alter the state of anything outside of the array that is being operated on. You don't want to make changes to that array. And you don't want to rely on any values in the state of the application that you operating in.
*/
// Example with a classic for loop
(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  let animalLetterCount = 0;
  for(let j = 0; j<animals.length; j++){
     animalLetterCount += animals[j].length;
  }
  console.log(animalLetterCount);//11

}());//end wrapper iife

// example with reduce method

(function(){
  'use strict';

  const animals = ['cat', 'dog', 'horse'];
  let animalLetterCount = animals.reduce((sum, el)=> sum + el.length, 0);  
  console.log(animalLetterCount);//11

}());//end wrapper iife

// explaining the code

/* 
  We were able to use an anonymous inline function that took a sum and el parameter, in this case each el being an element of the array, and the sum being the value that we want to curry forward.    
  The function simply returned that sum plus the length of the element.
  Initial value of sum was set to 0, as our initial value.
  Reduce method went through the entire array, looked at each item, added the item's length to our sum, and kept carrying the sum forward.

  When we are done the sum is the value assigned to our letter count. And one of the interesting things about reduce is that the accumulator value is not mandatory. You can call the reduce method without set an initial value for the accumulator (sum in our case).

   BUT bear in mind that due to 'type coercion' and 'operator overloading'* in javascript, that final value actually sets the value AND the type for the running total.
   So it is optional, unless you want to control the 'type' or 'the value at the beginning' of your operation. 

   In most cases it is a good idea to set it.

   EXAMPLE:
*/

(function(){
  'use strict';

   const animals = ['cat', 'dog', 'horse'];
   let animalLetterCount = animals.reduce((sum, el)=> sum + el.length);  // zero missing here
   console.log(animalLetterCount); //cat34

}());//end wrapper iife

//Why we get 'cat34' instead of '11' ?
/* 
  This is because of the way javascript overloads the addition operator. 
  The addition operator can be used to add numbers together IF all the values are numbers.
  BUT if one or more of the values is/are string(s), the operator is going to treat the result as if it was a string. 
  So in this case because we did not set an accumulator in the first place, our accumulator assumed that the first value in the array should be the value set for the sum.
  And because the first value was a string, it assumed that the plus operator should be used to add together string values, and return a sting. So the cat was assigned as the first value, then the length of dog was added and then the length of fish was added, giving us cat34. 

*/