// Let's remember how a traditional loop is created
const animals = ['cat', 'dog', 'horse'];
let lengths = [];
for(let j = 0; j<animals.length; j++){
   lengths.push(animals[j].length);
}

console.log(lengths);

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