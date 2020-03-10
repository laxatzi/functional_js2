// Higher Order Functions

/* 
  Javascript treats functions as "first class citizens"
    --The type of a function is Object 
    --They can be assigned to a variable as a value
    --They can be passed to another function as an argument
    --They can be returned by another function as a result

  A Higher Order Function is a function that takes another function as an argument
  For example:
  Both setInterval and setTimeout functions take functions as one of their arguments
  See below:
*/

(function(){
  'use strict';
  const logTime = ()=> console.log(new Date().toLocaleTimeString());
  const timer = setInterval(logTime,1000);

  console.log(setTimeout(()=>clearInterval(timer), 3000));
}());//end wrapper iife

// Returning functions 
/* 
  Let's imagine that you are doing some text processing on a document and it keeps on referring to the 'millennials' all the time. And that every time you counter the word 'millennials' you want to replace it with the word 'snake people'. 
  Code bellow:
*/
(function(){
  'use strict';
  const snakify = (text)=> text.replace(/millennials/ig, "snake people");
  
  console.log(snakify("The millennials are always up to something"));

 //  Now lets create another similar function:
  const hippify = (text)=> text.replace(/baby boomers/ig, "aging hippies");

  console.log(hippify("The baby boomers just look the other way."));
}());//end wrapper iife

//Although the two functions work properly, they have a lot of duplication.
// If we want to reduce duplication in our code, we might create a function with code 
// that encapsulates the things that are repeated across those multiple functions and then have that function return a function

(function(){
  'use strict';

   const attitude = (original, replacement) => {
      return function(source){
         return source.replace(original, replacement);
      }
   };//end of const
   const snakify = attitude(/millennials/ig, "Snake people");
   const hippify = attitude(/baby boomers/ig, "Aging Hippies" );

   console.log(snakify("The millennials are always up to something"));
   console.log(hippify("The baby boomers just look the other way"));

}());//end wrapper iife

//REFACTORING the above code in ECMA2015
(function(){
  'use strict';

  const attitude =  (original, replacement)=> (source)=> source.replace(original, replacement);
  const snakify = attitude(/millennials/ig, "Just snake people");
  const hippify = attitude(/baby boomers/ig, "Just aging hippies");

  console.log(snakify("The millennials are always up to something"));
  console.log(hippify("The baby boomers just look the other way"));
}());//end wrapper iife