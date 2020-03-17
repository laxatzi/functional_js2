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